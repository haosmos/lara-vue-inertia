<template>
  <form @submit.prevent="login">
    <div class="w-1/2 mx-auto">
      <div>
        <label class="label" for="email">E-mail (username)</label>
        <input id="email" v-model="form.email" class="input" type="text" />
        <div class="input-error">Potential errors</div>
      </div>
      <div class="mt-4">
        <label class="label" for="password">Password</label>
        <input id="password" v-model="form.password" class="input" type="password" />
      </div>
      <div class="mt-4">
        <button class="btn-primary w-full" type="submit">Login</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3';

const form = useForm({
  email: null,
  password: null,
});
const login = () => form.post(route('login.store'));
</script>
