/*
TodoList에 등록할 항목 UI
 */
<template>
  <section>
    <div>
      <div class="col border border-primary rounded">
        <input
          type="text"
          class="form-control"
          placeholder="여기에 할일을 적으세요"
        />
        <div class="row">
          <div class="col-6"><input type="date" class="float-start" /></div>
          <div class="col-6">
            <button type="button" class="btn btn-primary btn-sm float-end">
              작업추가
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>