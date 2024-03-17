<template>
  <section>
    <div>
      <div class="input-group input-group-sm">
        <div class="input-group-text">
          <input class="form-check-input" type="checkbox" />
        </div>
        <div class="input-group-text">
          <input
            class="form-input mt-0"
            type="date"
            disabled="disabled"
            value="2024-03-17"
          />
        </div>
        <input type="text" class="form-control" value="오늘 할일 제목1" />
        <button
          class="btn btn-outline-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          할일 관리
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><a class="dropdown-item">할일 삭제</a></li>
          <li><a class="dropdown-item">할일 완료</a></li>
        </ul>
      </div>
    </div>
    <div class="col border border-second"></div>
    <div>
      <div class="input-group input-group-sm">
        <div class="input-group-text">
          <input class="form-check-input" type="checkbox" />
        </div>
        <div class="input-group-text">
          <input
            class="form-input mt-0"
            type="date"
            disabled="disabled"
            value="2024-03-17"
          />
        </div>
        <input type="text" class="form-control" value="오늘 할일 제목2" />
        <button
          class="btn btn-outline-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          할일 관리
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><a class="dropdown-item">할일 삭제</a></li>
          <li><a class="dropdown-item">할일 완료</a></li>
        </ul>
      </div>
    </div>
    <div class="col border border-second" style="display: none"></div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>