<template>
  <el-container style="height: 100%;" class="layout" :class="{'collapse': isCollapse}">
    
    <app-nav :is-collapse="isCollapse"></app-nav>
    <el-container>
      <el-header>
        <div class="nav-icon" @click="isCollapse = !isCollapse">
          <i :class="`el-icon-s-${isCollapse ? 'un' : ''}fold`"></i>
        </div>
        
      </el-header>
      
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  import AppNav from './Nav'
  export default {
    components: {
      AppNav
    },
    data() {
      return {
        isCollapse: false
      }
    }
  };
</script>
<style lang="scss">
.layout {
  &.collapse .logo {
    font-size: 12px;
  }
  .logo {
    padding: 10px;
    text-align: center;
    height: 60px;
    line-height: 40px;
    border-bottom: 1px solid #e6e6e6;
  }
  .el-header {
    color: #333;
    line-height: 60px;
    border-bottom: 1px solid #e6e6e6;

    .nav-icon {
      font-size: 20px;
      cursor: pointer;
    }
  }
  
  .el-aside {
    color: #333;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>