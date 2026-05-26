// このファイルはtravel_hotel_poster.pyが自動更新します
const HOTEL_LIST = [
  {
    "name": "由布院温泉　お宿　五輪花",
    "area": "湯布院",
    "address": "大分県由布市湯布院町川北177",
    "review": "4.46",
    "review_count": 713,
    "min_charge": 7500,
    "image": "https://trvimg.r10s.jp/share/image_up/31742/origin/4fa006efd45893ef957bc41bf0298a4abb7e14ba.47.1.26.2.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31742%2F"
  },
  {
    "name": "湯布院温泉　御宿　由布乃庄",
    "area": "湯布院",
    "address": "大分県由布市湯布院町塚原1009",
    "review": "4.79",
    "review_count": 578,
    "min_charge": 23700,
    "image": "https://trvimg.r10s.jp/share/image_up/106080/origin/fab91ac7cde16ee9b536e3b198383bea93dc0fdf.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106080%2F"
  },
  {
    "name": "由布院温泉　御宿　ゆふいん亭",
    "area": "湯布院",
    "address": "大分県由布市湯布院町川上山畔1027-3",
    "review": "4.57",
    "review_count": 753,
    "min_charge": 17500,
    "image": "https://trvimg.r10s.jp/share/image_up/41838/origin/567ccd00b8bb22a9e4d737b2a0f5f3bcce4fe7f1.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41838%2F"
  },
  {
    "name": "由布院温泉　かほりの郷　はな村",
    "area": "湯布院",
    "address": "大分県由布市湯布院町川上3015-1",
    "review": "4.65",
    "review_count": 715,
    "min_charge": 12000,
    "image": "https://trvimg.r10s.jp/share/image_up/43826/origin/b2bbee850debcbd2dd8d11fd88ceae7f187ad375.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F43826%2F"
  },
  {
    "name": "ＴＡＯＹＡ日光霧降",
    "area": "日光・鬼怒川",
    "address": "栃木県日光市所野1535-1",
    "review": "4.3",
    "review_count": 2373,
    "min_charge": 22200,
    "image": "https://trvimg.r10s.jp/share/image_up/68664/origin/1cbe090e670ad35c02567a63095ca665ef52ded8.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68664%2F"
  },
  {
    "name": "神戸メリケンパークオリエンタルホテル",
    "area": "有馬温泉・神戸",
    "address": "兵庫県神戸市中央区波止場町5-6  【ホテルコード10】0570-051-153",
    "review": "4.52",
    "review_count": 7021,
    "min_charge": 6730,
    "image": "https://trvimg.r10s.jp/share/image_up/8978/origin/b184b342d31556f2195e0b33cd45e924323f56a5.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8978%2F"
  },
  {
    "name": "神戸ホテルジュラク",
    "area": "有馬温泉・神戸",
    "address": "兵庫県神戸市中央区東川崎町1-1-1",
    "review": "4.51",
    "review_count": 1282,
    "min_charge": 4000,
    "image": "https://trvimg.r10s.jp/share/image_up/181293/origin/861af993b73554c219551a878c333b9628980195.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181293%2F"
  },
  {
    "name": "草津温泉　源泉一乃湯",
    "area": "草津温泉",
    "address": "群馬県吾妻郡草津町草津135",
    "review": "4.55",
    "review_count": 525,
    "min_charge": 9660,
    "image": "https://trvimg.r10s.jp/share/image_up/176541/origin/5db740a79b76617884089919e0ac255a1653eeaf.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176541%2F"
  },
  {
    "name": "草津温泉　草津ナウリゾートホテル",
    "area": "草津温泉",
    "address": "群馬県吾妻郡草津町草津白根750",
    "review": "4.41",
    "review_count": 2953,
    "min_charge": 16500,
    "image": "https://img.travel.rakuten.co.jp/share/HOTEL/9598/9598_kan.jpg",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9598%2F"
  },
  {
    "name": "草津温泉　ホテル櫻井",
    "area": "草津温泉",
    "address": "群馬県吾妻郡草津町大字草津465-4",
    "review": "4.51",
    "review_count": 4635,
    "min_charge": 14300,
    "image": "https://trvimg.r10s.jp/share/image_up/56137/origin/266e76ab0e751e5a1f1b96109d86e1344fb94722.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56137%2F"
  },
  {
    "name": "別府温泉　ホテル白菊",
    "area": "別府",
    "address": "大分県別府市上田の湯町16-36",
    "review": "4.58",
    "review_count": 1372,
    "min_charge": 17050,
    "image": "https://trvimg.r10s.jp/share/image_up/12660/origin/aacea80fedd368a2cfd4ef14bf23b4c11920eea2.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12660%2F"
  },
  {
    "name": "指宿温泉　休暇村　指宿",
    "area": "指宿",
    "address": "鹿児島県指宿市東方10445",
    "review": "4.37",
    "review_count": 1140,
    "min_charge": 12000,
    "image": "https://trvimg.r10s.jp/share/image_up/8580/MIDDLE/qqFCc9.jpeg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8580%2F"
  },
  {
    "name": "ホテルラヴニール美瑛",
    "area": "富良野・美瑛",
    "address": "北海道上川郡美瑛町本町１丁目9-21",
    "review": "4.62",
    "review_count": 758,
    "min_charge": 8100,
    "image": "https://trvimg.r10s.jp/share/image_up/37509/origin/85bef609cf2b237a3acdfa2341aa60d83bfa682d.47.1.26.2.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37509%2F"
  },
  {
    "name": "雲仙温泉　雲仙宮崎旅館",
    "area": "雲仙・島原",
    "address": "長崎県雲仙市小浜町雲仙320番地",
    "review": "4.92",
    "review_count": 851,
    "min_charge": 24530,
    "image": "https://trvimg.r10s.jp/share/image_up/28126/origin/9ed3c649512284a455787d22fcd5681a6b25333f.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28126%2F"
  },
  {
    "name": "天然温泉　紫雲の湯　ラビスタ富良野ヒルズ（ドーミーイン・御宿野乃　ホテルズグループ）",
    "area": "富良野・美瑛",
    "address": "北海道富良野市朝日町5-14",
    "review": "4.44",
    "review_count": 633,
    "min_charge": 5750,
    "image": "https://trvimg.r10s.jp/share/image_up/176997/origin/bf2262af4ccd456c91b455775ef3ac43d9957f39.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176997%2F"
  },
  {
    "name": "新富良野プリンスホテル",
    "area": "富良野・美瑛",
    "address": "北海道富良野市中御料",
    "review": "4.35",
    "review_count": 1412,
    "min_charge": 6597,
    "image": "https://trvimg.r10s.jp/share/image_up/30804/origin/9334bee6d5cd78539d75bf1cf137a23e6f2fd94e.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30804%2F"
  },
  {
    "name": "富士屋ホテル",
    "area": "箱根",
    "address": "神奈川県足柄下郡箱根町宮ノ下359",
    "review": "4.78",
    "review_count": 2154,
    "min_charge": 28886,
    "image": "https://trvimg.r10s.jp/share/image_up/1727/origin/961a354632e07d8ae853a11930e29f06424c4d53.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1727%2F"
  },
  {
    "name": "箱根ホテル小涌園",
    "area": "箱根",
    "address": "神奈川県足柄下郡箱根町ニノ平1297",
    "review": "4.35",
    "review_count": 470,
    "min_charge": 20625,
    "image": "https://trvimg.r10s.jp/share/image_up/184829/origin/2dab578edd46f8bb25cdb0739e0d2897b6af3a5d.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184829%2F"
  },
  {
    "name": "箱根小涌園　天悠",
    "area": "箱根",
    "address": "神奈川県足柄下郡箱根町二ノ平1297",
    "review": "4.68",
    "review_count": 851,
    "min_charge": 36300,
    "image": "https://trvimg.r10s.jp/share/image_up/158501/origin/b82e043e3cadd7fa4522c6b0df18a96634b43203.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158501%2F"
  },
  {
    "name": "イマジンホテル＆リゾート函館",
    "area": "函館",
    "address": "北海道函館市湯川町3-1-17",
    "review": "4.47",
    "review_count": 2047,
    "min_charge": 4641,
    "image": "https://trvimg.r10s.jp/share/image_up/137023/origin/85bebdb28da48bed01b7c82b484f0d17775bcc6e.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137023%2F"
  },
  {
    "name": "ラビスタ函館ベイ（共立リゾート）",
    "area": "函館",
    "address": "北海道函館市豊川町12-6",
    "review": "4.45",
    "review_count": 5277,
    "min_charge": 11063,
    "image": "https://trvimg.r10s.jp/share/image_up/69295/origin/fd0223bfd3d07c4093559f1c038650426c0bc35c.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F69295%2F"
  },
  {
    "name": "函館湯の川温泉　海と灯／ヒューイットリゾート",
    "area": "函館",
    "address": "北海道函館市湯川町3-9-20",
    "review": "4.46",
    "review_count": 1976,
    "min_charge": 10980,
    "image": "https://trvimg.r10s.jp/share/image_up/182148/origin/1a3a2291628332c5ad24877ad317b6fb039a49ce.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182148%2F"
  },
  {
    "name": "センチュリーマリーナ函館",
    "area": "函館",
    "address": "北海道函館市大手町22-13",
    "review": "4.7",
    "review_count": 3215,
    "min_charge": 13500,
    "image": "https://trvimg.r10s.jp/share/image_up/168681/origin/0bc94c7bbacf26395471bfd188d0a532a1d73f53.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168681%2F"
  },
  {
    "name": "山中温泉　かがり吉祥亭",
    "area": "加賀温泉",
    "address": "石川県加賀市山中温泉こおろぎ町ニ1-1",
    "review": "4.65",
    "review_count": 1630,
    "min_charge": 13500,
    "image": "https://trvimg.r10s.jp/share/image_up/68251/origin/c81eba4e79fa66d80dd008c8eba1ce3e829baa3f.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68251%2F"
  },
  {
    "name": "粟津温泉　旅亭懐石　のとや",
    "area": "加賀温泉",
    "address": "石川県小松市粟津温泉　ワ85",
    "review": "4.4",
    "review_count": 6331,
    "min_charge": 9900,
    "image": "https://trvimg.r10s.jp/share/image_up/14380/origin/a4f3e5ed5986ced7becf5938d389c307bb0e2b48.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14380%2F"
  },
  {
    "name": "天然温泉　九谷五彩の湯　スーパーホテル石川・能美根上スマートインター",
    "area": "加賀温泉",
    "address": "石川県能美市吉原釜屋町ハ61-1",
    "review": "4.46",
    "review_count": 701,
    "min_charge": 3860,
    "image": "https://trvimg.r10s.jp/share/image_up/181417/origin/edc32e4c69ed0bb93d3f4f8238206bd89b2a96f0.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181417%2F"
  },
  {
    "name": "山中温泉　白鷺湯たわらや",
    "area": "加賀温泉",
    "address": "石川県加賀市山中温泉東町２丁目ヘ-1",
    "review": "4.5",
    "review_count": 850,
    "min_charge": 8800,
    "image": "https://trvimg.r10s.jp/share/image_up/40312/origin/6c72e98078e9de5882a06911ef67e9e06c498ebd.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40312%2F"
  },
  {
    "name": "山代温泉　ゆのくに天祥",
    "area": "加賀温泉",
    "address": "石川県加賀市山代温泉19-49-1",
    "review": "4.56",
    "review_count": 3603,
    "min_charge": 9350,
    "image": "https://trvimg.r10s.jp/share/image_up/1616/origin/b27e92d7f86695babf0420c64acc75f4ccaca4b7.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1616%2F"
  },
  {
    "name": "下呂温泉　離れの宿　月のあかり",
    "area": "下呂温泉",
    "address": "岐阜県下呂市湯之島758-15",
    "review": "4.3",
    "review_count": 372,
    "min_charge": 36000,
    "image": "https://trvimg.r10s.jp/share/image_up/68528/origin/567f2d97804d68bc9484b2504a00c21216a4a494.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68528%2F"
  },
  {
    "name": "下呂温泉　湯あそびの宿　下呂観光ホテル本館",
    "area": "下呂温泉",
    "address": "岐阜県下呂市萩原町西上田2148-1",
    "review": "4.38",
    "review_count": 1388,
    "min_charge": 2750,
    "image": "https://trvimg.r10s.jp/share/image_up/4730/origin/d3103b54325a514e615f48bd929403cd45bfe4ee.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4730%2F"
  },
  {
    "name": "下呂温泉　小川屋",
    "area": "下呂温泉",
    "address": "岐阜県下呂市湯之島570",
    "review": "4.37",
    "review_count": 4682,
    "min_charge": 7700,
    "image": "https://trvimg.r10s.jp/share/image_up/10716/origin/168044ee9c53e76af36f752ccdeb526e43fbb854.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10716%2F"
  },
  {
    "name": "下呂温泉　水明館",
    "area": "下呂温泉",
    "address": "岐阜県下呂市幸田1268",
    "review": "4.33",
    "review_count": 5559,
    "min_charge": 8250,
    "image": "https://trvimg.r10s.jp/share/image_up/8886/origin/80115466c8d01673839ae0b32febb378c9c41651.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8886%2F"
  },
  {
    "name": "ハイアットリージェンシー瀬良垣アイランド沖縄",
    "area": "恩納・名護",
    "address": "沖縄県国頭郡恩納村瀬良垣1108",
    "review": "4.6",
    "review_count": 952,
    "min_charge": 19900,
    "image": "https://trvimg.r10s.jp/share/image_up/166320/origin/58d2da61ead968b9dbfa6c630b897e829bc29ac8.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F166320%2F"
  },
  {
    "name": "ＡＱＵＡＳＥＮＳＥ　Ｈｏｔｅｌ　＆　Ｒｅｓｏｒｔ",
    "area": "恩納・名護",
    "address": "沖縄県国頭郡恩納村字冨着黒崎原86-1",
    "review": "4.71",
    "review_count": 403,
    "min_charge": 13216,
    "image": "https://trvimg.r10s.jp/share/image_up/183576/origin/d3c50efea09046024c8bd2b1fe4954bc3777436a.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183576%2F"
  },
  {
    "name": "ＨＩＹＯＲＩオーシャンリゾート沖縄",
    "area": "恩納・名護",
    "address": "沖縄県国頭郡恩納村仲泊1055-1",
    "review": "4.69",
    "review_count": 372,
    "min_charge": 11988,
    "image": "https://trvimg.r10s.jp/share/image_up/180687/origin/4a000c015da5813ccb8a3b16ea31bc6d32c206c4.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180687%2F"
  },
  {
    "name": "ホテルモントレ沖縄　スパ＆リゾート",
    "area": "恩納・名護",
    "address": "沖縄県国頭郡恩納村字冨着1550-1",
    "review": "4.59",
    "review_count": 622,
    "min_charge": 12950,
    "image": "https://trvimg.r10s.jp/share/image_up/141596/origin/974c6e15ff337d44bbb92e1ba9dc1de4ea67f70d.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F141596%2F"
  },
  {
    "name": "リザン　シーパークホテル谷茶ベイ",
    "area": "恩納・名護",
    "address": "沖縄県国頭郡恩納村谷茶1496",
    "review": "4.38",
    "review_count": 2929,
    "min_charge": 5390,
    "image": "https://trvimg.r10s.jp/share/image_up/52229/origin/4d89cd65a695aa9948526b19140518701c7e0f5f.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52229%2F"
  },
  {
    "name": "カヌチャベイホテル＆ヴィラズ",
    "area": "恩納・名護",
    "address": "沖縄県名護市安部156-2",
    "review": "4.37",
    "review_count": 1310,
    "min_charge": 9000,
    "image": "https://trvimg.r10s.jp/share/image_up/29766/origin/558503043c1783d2118a15cc8b56368278e55888.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29766%2F"
  },
  {
    "name": "ルネッサンスリゾートオキナワ",
    "area": "恩納・名護",
    "address": "沖縄県国頭郡恩納村山田3425-2",
    "review": "4.66",
    "review_count": 823,
    "min_charge": 14500,
    "image": "https://trvimg.r10s.jp/share/image_up/54315/origin/75a61f1a830ecb1e6542125423bdfc4554e8b85c.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54315%2F"
  },
  {
    "name": "ハレクラニ沖縄",
    "area": "恩納・名護",
    "address": "沖縄県国頭郡恩納村名嘉真1967-1",
    "review": "4.79",
    "review_count": 597,
    "min_charge": 29095,
    "image": "https://trvimg.r10s.jp/share/image_up/172611/origin/c664c0be883ab7a6d07aa1a9f897e18234d33b48.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172611%2F"
  },
  {
    "name": "ザ・ブセナテラス",
    "area": "恩納・名護",
    "address": "沖縄県名護市喜瀬1808",
    "review": "4.55",
    "review_count": 821,
    "min_charge": 23600,
    "image": "https://trvimg.r10s.jp/share/image_up/5665/origin/5409e5ef10bbf9e1d686daeb7ae88904e3a41c56.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5665%2F"
  },
  {
    "name": "カフーリゾートフチャク　コンド・ホテル",
    "area": "恩納・名護",
    "address": "沖縄県国頭郡恩納村冨着志利福地原246-1",
    "review": "4.65",
    "review_count": 1667,
    "min_charge": 7259,
    "image": "https://trvimg.r10s.jp/share/image_up/78239/origin/44d63e2c2f5929ea67d72f791e7e4c4ea6ae85e1.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F78239%2F"
  },
  {
    "name": "伊香保温泉　千明仁泉亭（ちぎらじんせんてい）",
    "area": "伊香保温泉",
    "address": "群馬県渋川市伊香保町伊香保　４５番地",
    "review": "4.54",
    "review_count": 456,
    "min_charge": 15840,
    "image": "https://trvimg.r10s.jp/share/image_up/147464/origin/334564a77e5191c5c5a307432e6ac9f0a1f6e1d9.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147464%2F"
  },
  {
    "name": "伊香保温泉　心に咲く花　古久家（こくや）",
    "area": "伊香保温泉",
    "address": "群馬県渋川市伊香保町伊香保52",
    "review": "4.36",
    "review_count": 1344,
    "min_charge": 10500,
    "image": "https://trvimg.r10s.jp/share/image_up/6213/origin/ef2d617041c9c40422d4c41ce3796f1cc804eb1e.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6213%2F"
  },
  {
    "name": "渋川天然温泉　ハナホテル＆スパ　伊香保インター",
    "area": "伊香保温泉",
    "address": "群馬県渋川市半田3129-1",
    "review": "4.39",
    "review_count": 1658,
    "min_charge": 6500,
    "image": "https://trvimg.r10s.jp/share/image_up/182808/origin/bc0f80f090ff26fb8d892a3f79e714fb3a44fd3a.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182808%2F"
  },
  {
    "name": "伊香保温泉　森秋旅館",
    "area": "伊香保温泉",
    "address": "群馬県渋川市伊香保町伊香保60",
    "review": "4.31",
    "review_count": 2122,
    "min_charge": 13800,
    "image": "https://trvimg.r10s.jp/share/image_up/17741/origin/f6723859f81719e9a0ea2dfc160efd81812c37e0.47.1.26.2.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17741%2F"
  },
  {
    "name": "伊香保温泉　福一",
    "area": "伊香保温泉",
    "address": "群馬県渋川市伊香保町伊香保香湯5-4",
    "review": "4.31",
    "review_count": 1520,
    "min_charge": 9350,
    "image": "https://trvimg.r10s.jp/share/image_up/28606/origin/dd26df9ae2657628aa490bc0b11250b4d2fc067d.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28606%2F"
  },
  {
    "name": "伊香保温泉　ホテル木暮",
    "area": "伊香保温泉",
    "address": "群馬県渋川市伊香保町伊香保135",
    "review": "4.74",
    "review_count": 1867,
    "min_charge": 19800,
    "image": "https://trvimg.r10s.jp/share/image_up/6266/origin/185de8658f00caa84f394553e27713ef263ef5b4.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6266%2F"
  },
  {
    "name": "伊香保温泉　ホテル松本楼",
    "area": "伊香保温泉",
    "address": "群馬県渋川市伊香保町伊香保164",
    "review": "4.53",
    "review_count": 3058,
    "min_charge": 13000,
    "image": "https://trvimg.r10s.jp/share/image_up/19271/origin/403a067a9f13f0d82d04b826ed182ff6173b8121.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19271%2F"
  },
  {
    "name": "杜の湯　きらの里（共立リゾート）（２０２５年１２月２２日リニューアルオープン）",
    "area": "伊豆高原",
    "address": "静岡県伊東市八幡野1326-5",
    "review": "4.5",
    "review_count": 1494,
    "min_charge": 16500,
    "image": "https://trvimg.r10s.jp/share/image_up/52638/origin/8ddf04e4b983d85e55fa060cbfaf8ba6ec9b6448.47.9.26.3.jpg?fit=inside%7C888:498",
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/52ac58bc.05f4f7c6.52ac58bd.4392e6e1/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52638%2F"
  },
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
