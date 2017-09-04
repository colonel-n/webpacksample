<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
            <router-link tag="li" to="/" exact><a>Root</a></router-link>
            <router-link tag="li" to="/world" exact><a>World</a></router-link>
        </ul>
        <button type="button" class="btn btn-primary" v-on:click="moveWorld">World</button>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Hello'
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData () {
                this.$store.commit("INCREMENT");
                alert(this.$store.state.counter);
            },
            moveWorld() {
                this.$router.push({name: 'world'});
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
