<script setup lang="ts">
import { ElForm, ElMessage } from "element-plus";
import { useUserStore } from "@/store/modules/user";
const UserStore = useUserStore();
const router = useRouter();
const isLoginType = ref(true);
const clickHandler_Type = (
  type: boolean,
  formEl: InstanceType<typeof ElForm> | undefined
) => {
  isLoginType.value = type;
  resetForm(formEl);
};
const resetForm = (formEl: InstanceType<typeof ElForm> | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
// 登录
const loginObject = reactive({
  name: "",
  password: "",
});
const loginFormRef = ref<InstanceType<typeof ElForm>>();
const loginRules = reactive({
  name: [
    {
      required: true,
      message: "Please input name",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Please input password",
      trigger: "blur",
    },
  ],
});
const post_login = async () => {
  let params = {
    username: loginObject.name,
    password: loginObject.password,
  };
  // let [results, message, code]: any = await loginApi.login(params);
  UserStore.login(params).then((res: any) => {
    router.push("/");
  });
};
const clickHandler_login = (
  formEl: InstanceType<typeof ElForm> | undefined
) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      post_login();
    } else {
      return false;
    }
  });
};
// 注册
const registerObject = reactive({
  name: "",
  password: "",
});
const registerFormRef = ref<InstanceType<typeof ElForm>>();
const registerRules = reactive({
  name: [
    {
      required: true,
      message: "Please input name",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Please input password",
      trigger: "blur",
    },
  ],
});
const clickHandler_register = (
  formEl: InstanceType<typeof ElForm> | undefined
) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
    } else {
      return false;
    }
  });
};
</script>

<template>
  <div class="login">
    <div class="login-box">
      <h1>vite-admin</h1>
      <!-- 登录 -->
      <el-form
        v-if="isLoginType"
        ref="loginFormRef"
        status-icon
        label-position="top"
        :model="loginObject"
        hide-required-asterisk
        :rules="loginRules"
      >
        <el-form-item>
          <h2 class="form-title">用户登录</h2>
        </el-form-item>
        <el-form-item label="用户名" prop="name">
          <el-input v-model="loginObject.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginObject.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="button-sub"
            type="primary"
            @click="clickHandler_login(loginFormRef)"
            >登录</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-button
            class="button-sub"
            type="text"
            @click="clickHandler_Type(false, loginFormRef)"
            >用户注册</el-button
          >
        </el-form-item>
      </el-form>
      <!-- 注册 -->
      <el-form
        v-if="!isLoginType"
        ref="registerFormRef"
        status-icon
        label-position="top"
        :model="registerObject"
        hide-required-asterisk
        :rules="registerRules"
      >
        <el-form-item>
          <h2 class="form-title">用户注册</h2>
        </el-form-item>
        <el-form-item label="用户名" prop="name">
          <el-input v-model="registerObject.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="registerObject.password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="button-sub"
            type="primary"
            @click="clickHandler_register(loginFormRef)"
            >注册账号</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-button
            type="text"
            @click="clickHandler_Type(true, registerFormRef)"
            >返回登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  background: rgb(217, 236, 255);
  height: 100vh;
  width: 100vw;
  .login-box {
    width: 400px;
    height: 500px;
    padding: 20px;
    background-color: #fff;
    border-radius: 16px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    .form-title {
      width: 100%;
      text-align: center;
    }
    .button-sub {
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>
