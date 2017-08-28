<style>
    .red {
        color: #f00;
    }
</style>

<template>
    <section>
        <h1 class="red">{{msg}}</h1>
        <i class="glyphicon glyphicon-ok"></i>
    </section>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                msg: 'Hello world!'
            }
        }
    }
</script>