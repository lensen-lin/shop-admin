import { defineComponent } from 'vue'

interface PropsType {
  msg: string
}
export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup () {
    return (props: PropsType) => (
        <div>{ props.msg }</div>
    )
  }
})

// export default defineComponent({
//     props: {
//       msg: {
//         type: String,
//         required: true
//       }
//     },

//     render () {
//       return (
//           <div>{ this.msg }</div>
//       )
//     }
//   })
