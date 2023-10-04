<script>
export default {
  functional: true,
  props: {
    childItem: Object,
    title: String
  },

  data: () => ({
  }),

  render: function (h, context) {
    const { props, listeners } = context
    let item = context.props.childItem ? context.props.childItem : null
    let itemHolder = []

    Object.keys(item).forEach(i => {
      const type = item[i]['type']
      const val = item[i]['value']
      itemHolder.push(h(`v-${type}`, {
        // domProps: {
        //   value: 
        // },
        on: {
          input: function (event) {
            self.$emit('input', event.target.value)
          }
        }
      }))
    })

    return h('form', { 'class': 'd-flex flex-column' }, [itemHolder])

    return h(
      'v-btn',
      {
        on: {
          click: function () {
            const emitEvent = listeners['event-from-child']
            emitEvent('Message from child')
          }
        }
      },
      'Click'
    )
  },

  methods: {
    testFunc () {
      alert('TEST')
    }
  }
}
</script>

<style>

</style>