


const directives = {
  // 实现一键复制指令
  copy: {
    bind(el, { value }, vNode) {
      const currentInstance = vNode.context
      el.$value = value
      el.handler = () => {
        if (!el.$value) {
          currentInstance.$message.info({
            content: '无复制内容',
            background: true
          })
          return
        }
        // 动态创建textArea标签
        const textarea = document.createElement('textarea')
        // 设置只读属性 防止ios唤起键盘
        textarea.readOnly = true
        // 放置在看不见的位置
        textarea.style.position = 'absolute'
        textarea.style.left = '-9999px'
        // 设置textArea值为段落值
        textarea.value = el.$value
        // 挂载到页面上
        document.body.appendChild(textarea)
        // 驱动选中文本
        textarea.select()
        // 驱动文档执行copy命令 获取copy到的值
        const text = document.execCommand('Copy')

        if (text) {
          currentInstance.$message.success({
            content: '复制成功!',
            background: true
          })
        }
      }



      // 添加事件监听器
      el.addEventListener('click', el.handler)
    },
    // 解绑时移除事件监听器 防止内存泄漏
    unbind(el) {
      el.removeEventListener('click', el.handler)
    }
  },
  // 实现防抖操作指令 暂时不支持返回值
  debounce: {
    bind(el, { value: config }) {
      let timer
      const fn = config.fn
      const options = config.options ? config.options : {}
      // 默认debounce为0
      const delay = options.delay ? options.delay : 0
      // 拿到监听的事件
      const trigger = options.trigger
      if (!trigger) {
        return alert('loss args what is called event')
      }
      // 是否立即执行
      let isImmediate = options.isImmediate
      let flag = true
      el.addEventListener(trigger, (e) => {
        if (timer) {
          clearTimeout(timer)
        }
        // 如果立即执行
        if (isImmediate) {
          if (flag) {
            fn.call(this, e)
            flag = false
            return
          }
          timer = setTimeout(() => {
            fn.call(this, e)
            flag = true
          }, delay)
        } else {
          // 非立即执行
          timer = setTimeout(() => {
            fn.call(this, e)
            flag = true
          }, delay)
        }
      })
    }
  },
  // 实现input输入框之类的自动聚焦
  focus: {
    // inserted钩子表示被绑定父节点时调用
    inserted(el) {
      el.focus()
    }
  },
  // 实现添加水印功能
  watermark: {
    bind(el,binding) {
      const options = binding.value
      const canvas = document.createElement('canvas')
      const parentNode = el
      parentNode.appendChild(canvas)
      canvas.width = 200
      canvas.height = 150
      canvas.style.display = 'none'
      const context = canvas.getContext('2d')
      context.rotate((-20 * Math.PI) / 180)
      context.font = options.font ? options.font : '16px Microsoft JhengHei'
      context.fillStyle = options.textColor ? options.textColor : 'rgba(180,180,180,0.3)'
      context.textAlign = 'left'
      context.textBaseline = 'Middle'
      context.fillText(options.text,canvas.width / 10,canvas.height / 2)
      parentNode.style.backgroundImage = 'url(' + canvas.toDataURL('image/png') + ')'
    }
  }
}

// 导出指令注册对象
export default {
  install(Vue) {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key])
    })
  }
}