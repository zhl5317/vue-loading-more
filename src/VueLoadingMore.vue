<template>
  <div ref="intersection" class="intersection">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VueLoadingMore',
  props: {
    threshold: {
      type: Number,
      default: 0.5
    }
  },
  data() {
    return {
      intersectionObserver: null,
      intersection: null
    };
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: this.threshold
    };

    this.intersectionObserver = new IntersectionObserver(this.handleIntersection, options);
    this.intersectionObserver.observe(this.$refs.intersection);
  },
  destroyed() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.$emit('intersect');
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
