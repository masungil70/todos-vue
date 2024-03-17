<template>
  <div id="app">
    <header>
      <hgroup>
        <h1>나의 할일</h1>
        <em>2024-03-17</em>
      </hgroup>
    </header>
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
      <div>
        <span class="float-start" style="color: red">▶</span>
        <strong class="float-start">처리하지 못한 작업들</strong>
      </div>
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
      <div class="col border border-second" style="display: none"></div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>