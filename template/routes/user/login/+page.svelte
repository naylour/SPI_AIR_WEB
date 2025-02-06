<script lang="ts">
    import { login } from 'lib/directus';

    let loginData = $state({
        email: '',
        password: ''
    });
</script>

<section class="login">
    <form class="login-form" onsubmit={__event__ => {
        __event__.preventDefault();
        __event__.stopPropagation();

        login(loginData.email, loginData.password);
    }}>
        <input
            class="login-input form-input"
            type="email"
            name="email"
            placeholder="Email"
            bind:value={loginData.email}
        />
        <input
            class="login-input form-input"
            type="password"
            name="password"
            placeholder="Password"
            bind:value={loginData.password}
        />
        <button type="submit">Войти</button>
    </form>
</section>

<style lang="postcss">
</style>
