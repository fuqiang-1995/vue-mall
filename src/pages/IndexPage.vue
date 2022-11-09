<template>
  <h1>IndexPage</h1>
  <el-row class="mb-4">
    <el-input type="primary" v-model="input"></el-input>
    <el-button type="primary" @click="setCoolie">设置Cookie</el-button>
    <el-button type="success" @click="getCookie">读取Cookie</el-button>
    <el-button type="info" @click="delCookie">删除Cookie</el-button>
  </el-row>
</template>

<script setup>
import {useCookies} from '@vueuse/integrations/useCookies'
import {ref} from "vue";

const cookie = useCookies()
cookie.set("token", "12345")
const input = ref("")

function setCoolie() {
  cookie.set("token", input)
}

function getCookie() {
  console.log(cookie.get("token"))
}

function delCookie() {
  cookie.remove("token")
}

</script>

<style scoped>

</style>