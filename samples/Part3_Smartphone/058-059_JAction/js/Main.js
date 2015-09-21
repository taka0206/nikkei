//ユーザーが独自に拡張する部分
Main = function()
{
  /* フラグ、定数 */
  // ミサイルを打ったフラグ 
  var missileFlg = false;
  // 敵の速さ 
  var xinc = 10;
  var yinc = 10;
  // ミサイルの速さ
  var yMissile = 30;

  // 背景のBoxClassのオブジェクトを取得
  var backgroundBox = ja.stage.getChildAt(0);
  // 背景の色を変更
  backgroundBox.color = "#eeeeee";

  // 敵のオブジェクト生成
  var enemyObject = new ja.BoxClass(20,20,"#ff0000");
  // 初期座標を指定
  enemyObject.x = 150; enemyObject.y = 200;
  // 透明度
  enemyObject.alpha = 0.5;

  // 表示時に初期処理のイベントを登録する
  ja.imageUnitObj.addEventListener("onLoad", this);
  // 自機、ミサイル画像の読み込み 
  ja.imageUnitObj.load(["img/bar.png" , "img/space0.png"]);

  // 初期処理として実行する処理
  this.onLoad = function()
  {
    //アドレスバーを消す
    window.scrollTo(0, 1);

    // 自機と敵を描画する
    backgroundBox.addChild(ja.imageUnitObj["space0"]);
    backgroundBox.addChild(enemyObject);
    
    // ミサイルの初期位置の設定
    ja.imageUnitObj["bar"].y = 330;
    ja.imageUnitObj["bar"].x = 0;
    // 自機の初期位置の設定
    ja.imageUnitObj["space0"].x = 110;
    ja.imageUnitObj["space0"].y = 350;
    
    // タッチした時と、動かした時のイベントを設定
    backgroundBox.addEventListener("touchIn", this);
    backgroundBox.addEventListener("touchMove", this);
    // 常にフレームとして発生するイベントを設定
    enemyObject.addEventListener("onEnterFrame" , this);
  };
  
  this.touchIn = function(e)
  {
    if(!missileFlg){
      // ミサイルの座標の位置を決定
      ja.imageUnitObj["bar"].y = 330;
      ja.imageUnitObj["bar"].x = e.touch_x + 15;
      // ミサイルを表示
      backgroundBox.addChild(ja.imageUnitObj["bar"]);
      // ミサイルを動かすフラグ 
      missileFlg = true;
    }
    // 自機を動かす
    ja.imageUnitObj["space0"].x = e.touch_x;
  };

  this.touchMove = function(e)
  {
    // 自機を動かす
    ja.imageUnitObj["space0"].x = e.touch_x;
  };
  
  // 1フレームごとに呼び出されるイベント
  this.onEnterFrame = function()
  {
    // ミサイルを動かす
    var moveMissile = function(){
      // ミサイルが存在したら、ミサイルを動かす
      if(missileFlg){
        ja.imageUnitObj["bar"].y -= yMissile;
        // 画面の外に出たらクリアする
        if(ja.imageUnitObj["bar"].y < 0){
          missileFlg = false;
          backgroundBox.removeChild(ja.imageUnitObj["bar"]);
        }
      }
    };
    
    // 敵を動かす
    var moveEnemy = function(){
      
      // 座標を動かす
      enemyObject.x += xinc;
      enemyObject.y += yinc;

      // 端に当たっているかどうかの判断。それにより方向を変える(x軸)
      if(enemyObject.x >= 300)
      {
        enemyObject.x = 300;
        xinc = -xinc;
      }
      else if(enemyObject.x <= 0)
      {
        enemyObject.x = 0;
        xinc = -xinc;
      }

      // 端に当たっているかどうかの判断。それにより方向を変える(y軸)
      if(enemyObject.y >= 460)
      {
        enemyObject.y = 460;
        yinc = -yinc;
      }
      else if(enemyObject.y <= 0)
      {
        enemyObject.y = 0;
        yinc = -yinc;
      }
      
      // ミサイルが敵に衝突しているか判定
      var missilehit = ja.hitObj.intersect(enemyObject,ja.imageUnitObj["bar"]);
      // 自機が敵に衝突しているか判定
      var space0hit = ja.hitObj.intersect(enemyObject,ja.imageUnitObj["space0"]);
      // ミサイルまたは自機が敵と衝突していた
      if((missilehit && missileFlg) || space0hit){
        
        // メッセージ
        var clearText = new ja.TextClass();
        clearText.x = 60;
        clearText.y = 200;
        clearText.px = "18px";
        
        // ヒットによって変更
        if(missilehit){
          clearText.text = "あなたは地球を救いました！";
          backgroundBox.removeChild(ja.imageUnitObj["bar"]);
        }else{
          clearText.text = "死んでしまうとは何事だ！";
          backgroundBox.removeChild(ja.imageUnitObj["space0"]);
        }
        
        // 敵を削除
        backgroundBox.removeChild(enemyObject);
        
        // フレームを止める
        enemyObject.removeEventListener("onEnterFrame" , this);
        backgroundBox.removeEventListener("touchIn", this);
        backgroundBox.removeEventListener("touchMove", this);
        
        // メッセージを表示
        backgroundBox.addChild(clearText);
      }
    };
    
    // ミサイルを動かす
    moveMissile();
    // 敵を動かす
    moveEnemy();
  };
};