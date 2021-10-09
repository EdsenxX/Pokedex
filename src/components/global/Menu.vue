<template>
    <div class="menu">
        <div class="menu__content">
            <div class="logo">
                <router-link to="/">
                <img src="@/assets/img/pokemon.png" alt="Logo Pokemon" />
                </router-link>
            </div>
            <nav>
                <ul>
                    <li>
                        <router-link to="/">
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about">
                            About
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .menu{
        background: #1b1b1b;
        z-index: 10;
        width: 100%;
        position: fixed;
        display: flex;
        justify-content: center;
        .menu__content{
            width: 90%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .logo{
                width: 200px;
                img{
                    width: 100%;
                }
            }
            nav{
                ul{
                    list-style: none;
                    display: flex;
                    gap: 10px;
                    li{
                        a{
                            text-decoration: none;
                            color: white;
                        }
                    }
                }
            }
        }
    }
</style>