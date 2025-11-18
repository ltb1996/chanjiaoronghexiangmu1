<template>
    <div class="login-container">
        <video id="v1" autoplay muted loop class="background-video">
            <source src="../../assets/syxyjianyao.mp4" />
        </video>
        <div class="login-title"></div>
        <form class="login-form" @submit.prevent="login">
            <div class="form-group">
                <label for="username">用户名</label>
                <input type="text" id="username" v-model="state.username" required />
            </div>
            <div class="form-group">
                <label for="password">密码</label>
                <input type="password" id="password" v-model="state.password" required />
            </div>
            <button type="submit" class="login-button">登录</button>
        </form>
        <div class="tail">
            <p class="register" @click="goRegister">用户注册</p>
            <p class="forgot-password">忘记密码？</p>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const router = useRouter();

const state = reactive({
    username: "",
    password: "",
    errorMessage: "",
});

const login = () => {
    if (state.username === "admin" && state.password === "admin") {
        router.push("/dashboard");
    } else {
        state.errorMessage = "用户名或密码错误";
        ElMessage.error(state.errorMessage);
    }
};

const goRegister = () => {
    router.push("/register");
};
</script>

<style scoped>
.login-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, sans-serif;
}

.background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 10%;
    z-index: 1;
}

.login-title {
    font-size: 2.5rem;
    margin-bottom: 15px;
    color: #fff;
    z-index: 99;
    background: url(../../assets/logobaisyxy.png) center center no-repeat;
    background-size: 30%;
    width: 1030px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-form {
    width: 340px;
    background: rgba(255, 255, 255, 0.8);
    padding: 20px 0px 20px 30px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    z-index: 99;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input {
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}

input:focus {
    border-color: #007aff;
    outline: none;
}

.login-button {
    width: 90%;
    padding: 10px;
    background-color: #007aff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
}

.login-button:hover {
    background-color: #005bb5;
}

.tail {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}

.forgot-password {
    color: #007aff;
    cursor: pointer;
    z-index: 99;
    margin-left: 20px;
}

.register {
    color: red;
    cursor: pointer;
    z-index: 99;
}
</style>