<template>
  <p>
    <slot></slot>
  </p>
</template>


<script>
export default {
  name: "TextTruncate",

  mounted() {
    console.log(this);
    this.original = this.$slots.default[0].elm.textContent;

    window.addEventListener("resize", this.resize);

    this.resize();
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },

  methods: {
    resize() {
      if (this.prevWidth === this.$el.clientWidth) return;

      this.prevWidth = this.$el.clientWidth;

      // 対象の要素を、高さにautoを指定し非表示で複製する
      const temporary = this.$el.cloneNode(true),
        style = temporary.style;
      let s = this.original;

      temporary.textContent = this.original;

      // style.display = "none";
      style.position = "absolute";
      style.visibility = "none";
      style.overflow = "visible";
      style.width = this.$el.clientWidth + "px";
      style.height = "auto";

      this.$el.appendChild(temporary);

      // 指定した高さになるまで、20文字ずつ消去していく(最適化のため)
      while (s.length > 0 && temporary.clientHeight > this.$el.clientHeight) {
        s = s.substr(0, s.length - 20);
        temporary.textContent = s + "...";
      }

      s = this.original.substr(0, s.length + 20);
      temporary.textContent = s + "...";

      // 指定した高さになるまで、1文字ずつ消去していく
      while (s.length > 0 && temporary.clientHeight > this.$el.clientHeight) {
        s = s.substr(0, s.length - 1);
        temporary.textContent = s + "...";
      }
      this.$el.removeChild(temporary);

      // 文章を入れ替えて、複製した要素を削除する
      this.$el.textContent = s + "...";
    }
  }
};
</script>


<style lang="scss" scoped>
p {
  height: 100%;
}
</style>
