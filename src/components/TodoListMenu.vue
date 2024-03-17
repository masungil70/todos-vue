<template>
  <section>
    <div class="row">
      <div class="col">
        <span class="float-start" style="color: blue">▶</span>
        <strong class="float-start">해야 할 작업들</strong>
      </div>
      <div class="col">
        <div class="btn-group float-end">
          <button
            class="btn btn-sm dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            리스트 필터
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item">해야 할 작업들</a></li>
            <li><a class="dropdown-item">완료한 작업들</a></li>
            <li><a class="dropdown-item">오늘의 모든 기록</a></li>
            <li><a class="dropdown-item">모든 작업</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>