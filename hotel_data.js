// このファイルはtravel_hotel_poster.pyが自動更新します
const HOTEL_LIST = [
  {
    "name": "全室スイート＆オーシャンビュー　ヴィラージュ伊豆高原",
    "area": "伊豆高原",
    "address": "静岡県伊東市富戸1317-8",
    "review": "4.53",
    "review_count": 1302,
    "min_charge": 4660,
    "image": "https://trvimg.r10s.jp/share/image_up/28426/origin/53645468a9782b77900f191e4c81e427679318df.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28426%2F"
  },
  {
    "name": "愛犬お宿　伊豆高原",
    "area": "伊豆高原",
    "address": "静岡県伊東市富戸1038-91",
    "review": "4.66",
    "review_count": 656,
    "min_charge": 21800,
    "image": "https://trvimg.r10s.jp/share/image_up/143277/origin/36074a598c66bf0d5ee9965b8bf79b9c4d868066.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F143277%2F"
  },
  {
    "name": "プレジャーリゾート伊豆赤沢温泉（赤沢温泉ホテル）",
    "area": "伊豆高原",
    "address": "静岡県伊東市赤沢浮山163-1",
    "review": "4.48",
    "review_count": 1495,
    "min_charge": 5500,
    "image": "https://trvimg.r10s.jp/share/image_up/107696/origin/b1a8170e6dff58a2354759ab074dd8992834791e.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F107696%2F"
  },
  {
    "name": "亀の井ホテル　伊豆高原",
    "area": "伊豆高原",
    "address": "静岡県伊東市八幡野1104-5",
    "review": "4.58",
    "review_count": 828,
    "min_charge": 17600,
    "image": "https://trvimg.r10s.jp/share/image_up/70875/origin/f5c12d7d6b70a59ada28ef3e4b1795dca441a350.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70875%2F"
  },
  {
    "name": "ホテル　アンダのおうち　伊豆高原",
    "area": "伊豆高原",
    "address": "静岡県伊東市八幡野1033-88",
    "review": "4.68",
    "review_count": 363,
    "min_charge": 17100,
    "image": "https://trvimg.r10s.jp/share/image_up/187434/origin/000a9720d90da5b209056d3760c31c7d4dc3405e.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187434%2F"
  },
  {
    "name": "ホテル＆スパ　アンダリゾート伊豆高原",
    "area": "伊豆高原",
    "address": "静岡県伊東市八幡野1133",
    "review": "4.58",
    "review_count": 3211,
    "min_charge": 19800,
    "image": "https://trvimg.r10s.jp/share/image_up/20532/origin/43fb1b43f339018eb201a3e8dcc206239047fad1.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20532%2F"
  },
  {
    "name": "アンダの森　伊豆いっぺき湖",
    "area": "伊豆高原",
    "address": "静岡県伊東市吉田836-2",
    "review": "4.64",
    "review_count": 4273,
    "min_charge": 18800,
    "image": "https://trvimg.r10s.jp/share/image_up/70720/origin/a820679e0ae83ca7348a88ff072f702925174ae0.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70720%2F"
  },
  {
    "name": "白浜温泉　ホテル三楽荘",
    "area": "南紀白浜",
    "address": "和歌山県西牟婁郡白浜町3078",
    "review": "4.47",
    "review_count": 2464,
    "min_charge": 12100,
    "image": "https://trvimg.r10s.jp/share/image_up/8226/origin/83ec6d635dcb011cf125db9169ea3ab56421636f.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8226%2F"
  },
  {
    "name": "南紀白浜マリオットホテル",
    "area": "南紀白浜",
    "address": "和歌山県西牟婁郡白浜町2428",
    "review": "4.39",
    "review_count": 1805,
    "min_charge": 7830,
    "image": "https://trvimg.r10s.jp/share/image_up/160834/origin/4ac10a5b5c1603ee08c2cf7edadb23fe2e9a724f.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F160834%2F"
  },
  {
    "name": "紀州・白浜温泉　むさし",
    "area": "南紀白浜",
    "address": "和歌山県西牟婁郡白浜町868",
    "review": "4.31",
    "review_count": 2349,
    "min_charge": 9900,
    "image": "https://trvimg.r10s.jp/share/image_up/19739/origin/414c1958f9331a8d8ad8cfb2f6a50e160fe1b1b6.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19739%2F"
  },
  {
    "name": "浜千鳥の湯　海舟（共立リゾート）",
    "area": "南紀白浜",
    "address": "和歌山県西牟婁郡白浜町1698-1",
    "review": "4.39",
    "review_count": 3516,
    "min_charge": 12100,
    "image": "https://img.travel.rakuten.co.jp/share/HOTEL/68224/68224.jpg",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68224%2F"
  },
  {
    "name": "ＨＯＴＥＬシーサイド島原",
    "area": "雲仙・島原",
    "address": "長崎県島原市新湊1-38-1",
    "review": "4.49",
    "review_count": 430,
    "min_charge": 6600,
    "image": "https://img.travel.rakuten.co.jp/share/HOTEL/139921/139921_kya.jpg",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139921%2F"
  },
  {
    "name": "雲仙温泉　ゆやど　雲仙新湯",
    "area": "雲仙・島原",
    "address": "長崎県雲仙市小浜町雲仙320",
    "review": "4.59",
    "review_count": 648,
    "min_charge": 8662,
    "image": "https://img.travel.rakuten.co.jp/share/HOTEL/31749/31749.jpg",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31749%2F"
  },
  {
    "name": "雲仙温泉　民芸モダンの宿　雲仙福田屋",
    "area": "雲仙・島原",
    "address": "長崎県雲仙市小浜町雲仙380-2",
    "review": "4.6",
    "review_count": 802,
    "min_charge": 12100,
    "image": "https://img.travel.rakuten.co.jp/share/HOTEL/6194/6194.jpg",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6194%2F"
  },
  {
    "name": "雲仙温泉・源泉かけ流し＆おしどりの池を望む美食の宿　東園",
    "area": "雲仙・島原",
    "address": "長崎県雲仙市小浜町雲仙181",
    "review": "4.54",
    "review_count": 467,
    "min_charge": 11385,
    "image": "https://img.travel.rakuten.co.jp/share/HOTEL/41803/41803.jpg",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41803%2F"
  }
];
