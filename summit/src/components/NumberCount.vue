<template>
  <div ref="counterContainer" class="number-counter">
    <span
      :key="transitionKey"
      class="number"
      :class="screenWidth < 600 ? 'mb' : ''"
    >
      {{ formatNumber(displayNumber) }}+
    </span>
  </div>
</template>

<script>
import { ref, watch, onMounted, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  props: {
    startNumber: {
      type: Number,
      required: true
    },
    endNumber: {
      type: Number,
      required: true
    },
    duration: {
      type: Number,
      default: 3000 // 一半时间
    }
  },
  setup(props, { emit }) {
    const displayNumber = ref(props.startNumber);
    const transitionKey = ref(0);
    const counterContainer = ref(null);

    const store = useStore();
    const screenWidth = computed(() => {
      return store.state.screenWidth;
    });

    const animateNumber = () => {
      const start = props.startNumber;
      const end = props.endNumber;
      const duration = props.duration;
      const increment = end > start ? 1 : -1;
      const steps = Math.abs(end - start);
      const stepTime = duration / steps;

      let current = start;

      const timer = setInterval(() => {
        current += increment;
        displayNumber.value = current;

        if ((increment === 1 && current >= end) || (increment === -1 && current <= end)) {
          clearInterval(timer);
        }
      }, stepTime);

      setTimeout(() => {
        transitionKey.value += 1; // 每次数字变化时，更新transition key，强制重新渲染过渡效果
      }, duration);
    };

    const handleScroll = () => {
      const rect = counterContainer.value.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // 如果元素出现在视口中
      if (rect.top < windowHeight) {
        animateNumber();
        // 移除滚动事件监听器，避免重复触发动画
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // 添加滚动事件监听器
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });
    const formatNumber = (num) => {
      if(!num){
        return 0
      }
      if(num == '--'){
        return '--'
      }
      num = Number(num).toFixed(6) - 0
      const parts = num.toString().split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return parts.join('.')
    }
    return {
      displayNumber,
      transitionKey,
      counterContainer,
      formatNumber,
      screenWidth
    };
  }
};
</script>

<style>
.number {
  font-size: .5rem;
  &.mb {
    font-size: .4rem;
  }
}
</style>
