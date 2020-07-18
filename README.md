# 大麥網路 quiz

## 1.面試的動機
```
首先大麥不僅很有眼光還很有實踐力，在2005年就看到外送的商機，如今以訂票&訂餐的行動端系統為產品，賣給許多客戶，創下驚人業績，
目前大麥由創櫃走向興櫃再往IPO邁進，我認為很有前景。
再來大麥很有野心，不僅拘泥於台灣第一，而是往亞洲第一甚至世界第一邁進，在有野心的團隊中工作我認為會增加我的熱情。
最後看到大麥的介紹文章我覺得很真實，清楚的解釋大麥目前的進展以及未來的規劃，也提到了些許不足之處，我想這會是我喜歡的地方
```

### 2.簡述以下的名詞

RESTful API:
```
  Representational State Transfer，簡稱REST，它並不是一種標準而是一種設計風格，原本的API為:
   獲得資料   /getData
   新增資料   /createData
   刪除資料   /deleteData/1
  由工程師自定義，沒有統一的用法，每當要使用不同公司的API都要去document確認，理解命名設計規則才可以使用，然而RESTful API 為:
   獲得資料GET     /data
   新增資料POST    /data
   刪除資料DELETE  /data/1
  就是用一個唯一的 URL 定位資源，將動作藏在 HTTP 的 method 裡面，有以下優點:
  以直觀簡潔的資源 URL、善用 HTTP Method，並使用 Web 所接受的資料類型: JSON, XML, YAML 等，最常見的是 JSON
```
SPA:
```
SPA（Single Page Application）意思是僅有一個頁面的應用程式，也就是說網頁不需跳轉頁面就可以達到基本的建立、讀取、修改、刪除資料功能。
以前製作網站大多是一個一個頁面切換，點選一個按鈕，重新載入另外一個頁面，如今隨著Ajax的出現，透過Ajax的技術，不需要重新載入網頁，
SPA利用Ajax在背景傳輸完後，再由Javascript Template來產生HTML
  
SPA的優點
1. 在第一次連結網站時，網站內容就已經被下載完成，所有資源不需要重新載入，
2. 而且在單一頁面可以看完所有資訊，對瀏覽者來說、資訊傳達更直接快速。
  
SPA的缺點
1. 因為將所有資料放在同一頁面中，SEO(搜尋引擎最佳化)問題需克服。
2. 因為將所有資料放在同一頁面中，URL網址都沒有改變，所以必須自定狀態來做判斷。
  
```
MVVM:
```
MVVM是Model-View-ViewModel的簡稱，三者扮演的角色為：

Model：管理資料來源如API和本地資料庫
View：顯示UI和接收使用者動作
ViewModel：從Model取得View所需的資料

View是Activity、Fragment或custom view，本身不做邏輯處理，當使用者跟UI有互動時將指令傳給ViewModel處理，透過其獲得所需的資料並顯示。

ViewModel接收View的指令並對Model請求資料，將取得的資料保存起來供View使用。

Model管理所有的資料來源，例如API、資料庫和SharedPreference，當ViewModel來請求資料時從正確的來源取得資料並回傳。
```
Vuex:
```
在專案結構下通常會有多個組件，組件內可能又有組件，組件的溝通原本是透過props和emit，一旦要跨組件獲取資料會非常麻煩，因此透過Vuex集中式管理資料

在Vuex中，儲存狀態的是state，透過 dispatch action 發出異步動作且 commit mutation 修改 state 的資料

```
Vue生命週期:
```
Vue生命週期為Vue實例從創建到銷毀的過程，其中有許多hook function 讓我們好操作生命週期

beforeCreate（創建前）
完成實例初始化，初始化非響應式變量

created（創建後）
實例創建完成，完成數據(data props computed)的初始化導入依賴項。
可訪問data computed watch methods上的方法和數據

beforeMount（載入前）
有了el,編譯了template/outerHTML

mounted（載入後）
完成創建vm.$el，和雙向綁定，
完成掛載DOM和渲染

beforeUpdate（更新前）
數據更新之前

updated（更新後）
完成虛擬DOM的重新渲染

beforeDestroy（銷毀前）
在執行app.$destroy()之前，可做取消事件綁定

destroyed（銷毀後）
在實例銷毀之後調用。
```

### 請盡量條列出你所知的 Sort 演算法，並給予 JS 範例

```
共有 Bubble Sort、Selection Sort 和 MergeSort
https://jsfiddle.net/jerry861200/d2hy1kbm/9/
```

### 於 Github 註冊一個帳號，並開啟一個 VueJS 專案，試著搭
配 Firebase 撰寫出 TODO List App

```
This is the page
```

### 簡單描述對於加入大麥後，你的自我成長期許與工作期望。

```
除了上班時間，下班會花2~3小時學習技術，像是:前端架構規劃、前端效能調教、如何改善使用者體驗，前端的資安問題、Code Review、對切版駕輕就熟，
希望以週為單位，提升自己開發的效率，有餘力後會學習後端的技術，如：SQL的效能、第三方串接金流等，以便日後往全端工程師的方向邁進，
經過三思的問題沒辦法的時候，也要向團隊的成員詢問，以便讓自己快速成長。

期望能夠在熱情和朝氣的環境下，和一群充滿幹勁和高效率的夥伴們開發我們能引以為榮的作品

```
