<template>
  <el-menu router default-active="1-2" class="el-menu-vertical-demo" :collapse="isCollapse">
    <div class="logo">
      Hobbies
    </div>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-document-copy"></i>
        <span slot="title">资讯管理</span>
      </template>
      <el-menu-item-group>
        <span slot="title">文章相关</span>
        <el-menu-item  :route="{ name: 'articles-lists' }" index="1-1">资讯列表</el-menu-item>
        <el-menu-item :route="{ name: 'articles-create' }" index="1-2">新增资讯</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  props: ['isCollapse']
}
</script>