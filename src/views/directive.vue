<template>
  <div class="directive-playground">
    <!-- 自动聚焦 -->
    <input class="h-ui-input" type="text" v-focus v-model="value">
    <!-- 参数测试 -->
    <div v-demo:foo.bar.visualize="value"></div>
    <!-- 动态指令参数 -->
    <div id="dynamicexample">
      <h3>Scroll down inside this section ↓</h3>
      <p v-pin:[direction]="200">I am pinned onto the page at 200px to the left.</p>
    </div>

    <!-- 复制操作 -->
    <div class="copy-item" style="margin-top: 224px;">
      {{ text }}
      <i class="copyable" v-copy:value="text">复制段落</i>
    </div>

    <!-- 
      在开发中，有些提交保存按钮有时候会在短时间内被点击多次，
      这样就会多次重复请求后端接口，造成数据的混乱，
      比如新增表单的提交按钮，多次点击就会新增多条重复的数据。
     -->
    <div class="copy-item" style="margin-top: 224px;">
      {{ debounceBackground }}
      <i class="copyable" v-copy:value="debounceBackground">复制段落</i>
    </div>
    <button class="save"
      v-debounce="{ fn: addCard,options: { trigger: 'click', delay: 500, isImmediate: false} }">点击保存</button>


    <!-- 试试输入框防抖 立即执行版本 -->
    <input type="text" class="h-ui-input"
      v-debounce="{ fn: inputRequest, options: { trigger: 'input', delay: 1000, isImmediate: true}}">

    <div class="copy-item" style="margin-top: 224px;">
      {{ lazyloadBackground }}
      <i class="copyable" v-copy:value="lazyloadBackground">复制段落</i>
    </div>


    <!-- 水印 -->
    <div class="copy-item" style="margin-top: 224px;">
      {{ watermarkBackground }}
      <i class="copyable" v-copy:value="lazyloadBackground">复制段落</i>
    </div>

    <div v-watermark="{text:'wyh版权所有',textColor:'rgba(180, 180, 180, 0.4)'}" style="width: 100vw;height: 100vh">1</div>
  </div>
</template>

<script>

export default {
  name: 'Directive',
  components: {},
  props: {},
  data() {
    const value = '自动聚焦'
    const direction = 'left'
    const text = '需求：实现一键复制文本内容，用于鼠标右键粘贴。'
    const debounceBackground = '背景：开发中遇到的表单输入，往往会有对输入内容的限制，比如不能输入表情和特殊字符，只能输入数字或字母等。'
    const lazyloadBackground = '背景：在类电商类项目，往往存在大量的图片，如 banner 广告图，菜单导航图，美团等商家列表头图等。图片众多以及图片体积过大往往会影响页面加载速度，造成不良的用户体验，所以进行图片懒加载优化势在必行。'
    const watermarkBackground = '背景：当需要给应用添加版权时使用'
    const cardList = []

    const ret = {
      value,
      direction,
      text,
      cardList,
      debounceBackground,
      lazyloadBackground,
      watermarkBackground
    }
    window.data = ret
    return ret
  },
  directives: {
    demo: {
      // bind只在指令第一次绑定到元素时调用 一般用于初始化
      // 参数
      // el代表指令绑定的元素
      // binding描述了绑定对象 具有多个属性
      // vnode表示Vue生成的虚拟节点
      bind(el, binding, vnode) {
        const s = JSON.stringify
        el.innerHTML =
          'name: ' + s(binding.name) + '<br/>' +
          'value: ' + s(binding.value) + '<br/>' +
          'expression: ' + s(binding.expression) + '<br/>' +
          'argument: ' + s(binding.arg) + '<br/>' +
          'modifiers: ' + s(binding.modifiers) + '<br/>' +
          'vnode keys: ' + Object.keys(vnode).join(',') + '<br/>'
      }
    },
    pin: function (el, binding, vnode) {
      el.style.position = 'fixed'
      const s = (binding.arg === 'left') ? 'left' : 'top'
      el.style[s] = binding.value + 'px'
    },
    // 实现图片懒加载指令
    lazyload: {
      binding(el) {}
    }
  },
  methods: {
    addCard() {
      this.cardList.push({
        text: '关羽',
        alia: '云长',
        stand: '蜀国阵营'
      })
      this.$message.success({
        content: '添加成功',
        background: true
      })
    },
    inputRequest(e) {
      console.log('发送网络请求,请求参数:', e.target.value)
    }
  }
}
</script>

<style scoped>
.directive-playground {
  height: 3000px;
}

.h-ui-input {
  margin: 2px;
  padding: 4px;
  border: 2px solid pink;
}

#dynamicexample {
  border: 2px solid #ccc;
}

.copy-item {
  position: relative;
  padding: 12px;
  background-color: #e4e6eb;
}

.copyable {
  position: absolute;
  right: 4px;
  top: 4px;
  cursor: pointer;
}

.save {
  padding: 4px;
  border: 1px solid blanchedalmond;
  background-color: sandybrown;
  margin: 4px;
}

.save:active {
  background-color: violet;
}
</style>
