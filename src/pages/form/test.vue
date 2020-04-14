<template>
  <div style="margin-top: 100px;">
    <my-form :model="formData" :rules="formRules" ref="formData">
      <form-item label="用户名" prop="username">
        <wb-input v-model="formData.username"></wb-input>
      </form-item>
      <form-item label="电话" prop="telephone">
        <wb-input v-model="formData.telephone"></wb-input>
      </form-item>
      <form-item label="电子邮箱" prop="email">
        <wb-input v-model="formData.email"></wb-input>
      </form-item>
      <form-item>
        <button @click="submitForm('formData')">提交</button>
      </form-item>
    </my-form>
  </div>
</template>
<script>
import MyForm from './form'
import FormItem from './formItem'
import Notice from '../notice/notice'
export default {
  name: 'Test',
  components: {
    MyForm,
    FormItem
  },
  data () {
    return {
      formData: {
        username: 'zhangsan',
        telephone: '13161316123',
        email: '229422941@qq.com'
      },
      formRules: {
        username: [{required: true, message: '不能为空'}],
        telephone: [{required: true, message: '不能为空'}],
        email: [{required: true, message: '不能为空'}]
      }
    }
  },
  methods: {
    submitForm (form) {
      this.$refs[form].validate(valid => {
        console.log(valid)
        const notice = this.$create(Notice, {
          title: '字段校验',
          message: valid ? '请求邓丽' : '校验失败',
          duration: 3000
        })
        notice.show()
      }
      )
    }
  }
}
</script>
<style scoped lang="scss">

</style>
