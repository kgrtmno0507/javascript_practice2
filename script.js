'use strict'; 
const btn = document.getElementById('btn');
var job = new Array(); //タスクを入れる変数
var i = 0; //ID用変数


    btn.addEventListener("click", function(){

        //各変数にIDを入れる
        const all = document.getElementById('all');
        const working = document.getElementById('working');
        const finish = document.getElementById('finish');
        const todo = document.getElementById('todo');
        const task = document.getElementById('task').value;

        const trst = '<tr class="trtag">' //trを作成
        const id = "<td>" + i + "</td>"; //IDを作成

        job.push(task); //入力されたタスクを配列に追加する。
        const to = "<td>" + task + "</td>"; //タスクを表示

        const work= "<td>" + '<input type="button"  id="work' + i + '" value="作業中">'  + "</td>"; //作業中ボタンを作詞

        const del = "<td>" + '<input type="button" id="del' + i + '" value="削除">'  + "</td>"; //削除ボタンを作成

        const tren = "</tr>" 
        todo.insertAdjacentHTML('beforeend',trst + id + to + work + del + tren); //表示させる
        
        //作成した作業中及び削除のID取得する

        // const job = document.getElementById();  
        // const era = document.getElementById(); 

        // 取得したIDに機能を追加する
        // job.addEventListener("click" , chageVal); 
        // era.addEventListener("click" , deletePar); 

        //IDの値を増やす
        i++;

        
        
});


//作業中が押された時完了に変更する機能
function chageval(){


    //  .value = "完了" ;
    //  .class = "end" ;
};


//削除が押された時に親要素を削除する機能
function deletePar(){

};
        

    
        



        






