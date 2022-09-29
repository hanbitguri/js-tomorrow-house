# tomorrow-house

### 1. GNB

- 로그인을 하지 않은 경우

```html
<div class="button-group">
  <button type="button" class="gnb-icon-button is-search lg-hidden">
    <i class="ic-search" aria-label="검색창 열기 버튼"></i>
  </button>

  <a href="/" class="gnb-icon-button"
    ><i class="ic-cart" aria-label="장바구니 열기 버튼"></i>
  </a>
  <div class="gnb-auth sm-hidden">
    <a href="/">로그인</a>
    <a href="/">회원가입</a>
  </div>
</div>
```

- 로그인을 한 경우

```html
<div class="button-group">
                    <button type="button" class="gnb-icon-button is-search lg-hidden">
                      <i class="ic-search" aria-label="검색창 열기 버튼"></i>
                    </button>
                    <a href="/" class="gnb-icon-button sm-hidden"
                      ><i class="ic-bookmark" aria-label="스크랩북 열기 버튼"></i
                    ></a>
                    <a href="/" class="gnb-icon-button sm-hidden"
                      ><i class="ic-bell" aria-label="내소식 열기 버튼"></i
                    ></a>
                    <a href="/" class="gnb-icon-button"
                      ><i class="ic-cart" aria-label="장바구니 열기 버튼"></i
                    >
                  <strong class="badge" aria-label="">12</strong></a>
                    <button
                      type="button"
                      aria-label="마이메뉴 열기 버튼"
                      class="gnb-avatar-button sm-hidden">
      <div class="avatar-32">
        <img
          src="./assets/images/img-user-01.jpg"
          alt="사딸라아저씨"
        />
      </div>
  </div>
```

### 2. Side-bar

- 로그인 하지 않은 경우

```html
<div class="sidebar-auth">
  <a href="/" class="btn-outlined btn-40">로그인</a>
  <a href="/" class="btn-primary btn-40">회원가입</a>
</div>
```

- 로그인 한 경우

```html
<div class="sidebar-user">
  <a href="/">
    <div class="avatar-24">
      <!-- 유저 이미지 렌더가 안되었을 경우 -->
      <!-- <img src="./assets/images/img-user-03.jpg" alt="사딸라아저씨" /> -->
    </div>
    <strong class="username">사딸라사딸라사딸라사딸라사딸라</strong>
  </a>
</div>
```

### 3. Search-modal

- 최근 검색어가 있을 경우

```html
<div class="search-history-content">
  <ol class="search-history-list">
    <li class="search-history-item">
      <button type="button" class="search-word">전한빛</button
      ><button type="button" class="delete-button">
        <i class="ic-close" aria-label="검색어 삭제"></i>
      </button>
    </li>
    <li class="search-history-item">
      <button type="button" class="search-word">최근검색어</button
      ><button type="button" class="delete-button">
        <i class="ic-close" aria-label="검색어 삭제"></i>
      </button>
    </li>
    <li class="search-history-item">
      <button type="button" class="search-word">
        최근검색어최근검색어최근검색어최근검색어</button
      ><button type="button" class="delete-button">
        <i class="ic-close" aria-label="검색어 삭제"></i>
      </button>
    </li>
  </ol>
</div>
```

- 최근 검색어가 없을 경우

```html
 <div class="search-history-content">
                <p class="placeholder">최근 검색한 내역이 없습니다.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
```
