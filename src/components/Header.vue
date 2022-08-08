<template>
    <nav class="navbar bg-dark text-light fs-3">
        <div class="container-fluid">
            <a href="https://pdfcpu.io/" target="_blank" class="nav-link fs-2"
                >PdfCpu</a
            >
            <button
                class="navbar-toggler bg-light"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="offcanvas offcanvas-end bg-dark text-light"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
            >
                <div class="offcanvas-header">
                    <router-link
                        to="/"
                        class="nav-link offcanvas-title fs-2"
                        id="offcanvasNavbarLabel"
                        >About</router-link
                    >
                    <button
                        type="button"
                        class="btn-close bg-light"
                        data-bs-dismiss="offcanvas"
                        aria-label="Закрыть"
                    ></button>
                </div>
                <div class="offcanvas-body">
                    <router-link to="/addstamp" class="nav-link py-2"
                        >AddStamp</router-link
                    >
                    <router-link to="/updatestamp" class="nav-link py-2"
                        >UpdateStamp</router-link
                    >
                    <router-link to="/deletestamp" class="nav-link py-2"
                        >DeleteStamp</router-link
                    >
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'Header',
};
</script>
<style lang="scss" scoped>
.router-link-active {
    color: gold !important;
}
</style>
