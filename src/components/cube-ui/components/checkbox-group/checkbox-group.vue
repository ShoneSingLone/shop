<template>
  <div class="cube-checkbox-group" ref="group" :class="groupClass" :data-horz="horizontal">
    <slot>
      <cube-checkbox v-for="(option, index) in options" :key="index" :option="option" :shape="shape" :position="position" :hollow-style="hollowStyle" />
    </slot>
  </div>
</template>
<script type="text/ecmascript-6">
import CubeCheckbox from "../checkbox/checkbox.vue";
const COMPONENT_NAME = "cube-checkbox-group";

const EVENT_INPUT = "input";
const EVENT_CHECKED = "checked";
const EVENT_CANCLE_CHECKED = "cancel-checked";

export default {
  name: COMPONENT_NAME,
  props: {
    value: {
      type: Array
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String,
      default: "circle"
    },
    position: {
      type: String,
      default: "left"
    },
    hollowStyle: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      // 挖坑，没懂什么意思
      // error: Keys starting with with '_' are reserved in '_checkboxGroup' group (vue/no-reserved-keys) at src\components\cube-ui\src\components\checkbox-group\checkbox-group.vue:54:9:
      p_value: [],
      p_checkboxGroup: true
    };
  },
  computed: {
    groupClass() {
      if (!this.horizontal) {
        return "border-top-1px border-bottom-1px";
      }
    }
  },
  watch: {
    value: {
      immediate: true,
      handler() {
        this.p_value = this.value.concat();
      }
    }
  },
  mounted() {
    this.$on(EVENT_CHECKED, function(value) {
      this.p_value.push(value);
      this.$emit(EVENT_INPUT, this.p_value);
    });
    this.$on(EVENT_CANCLE_CHECKED, function(value) {
      let index = this.p_value.indexOf(value);
      this.p_value.splice(index, 1);
      this.$emit(EVENT_INPUT, this.p_value);
    });
  },
  components: {
    CubeCheckbox
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@require '../../common/stylus/variable.styl';
@require '../../common/stylus/mixin.styl';

.cube-checkbox-group {
  z-index: 1;
  overflow: hidden;
  background-color: $checkbox-group-bgc;

  .cube-checkbox {
    &:last-child {
      .cube-checkbox-wrap {
        border-none();
      }
    }
  }
}

.cube-checkbox-group[data-horz='true'] {
  display: flex;
  padding-left: 0;
  border-1px($checkbox-group-horizontal-bdc, 2px);
  border-radius: 2px;

  .cube-checkbox {
    flex-fix();
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;

    &:after {
      border-color: $checkbox-group-horizontal-bdc;
    }

    &:last-child {
      border-none();
    }

    &[data-pos='right'] {
      .cube-checkbox-ui {
        position: relative;
        margin-left: 0.42em;
        order: 1;
      }

      .cube-checkbox-label {
        margin-right: 0;
      }
    }
  }

  .cube-checkbox-wrap {
    justify-content: center;
  }
}
</style>
