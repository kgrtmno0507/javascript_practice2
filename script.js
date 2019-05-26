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

        //新しいtrタグを作成
        const trst = document.createElement('tr')
        trst.id = "trtag" + i;

        //作ったtrタグをtbodyに追加する
        const objBody = document.getElementsByTagName("tbody").item(0); 
        objBody.appendChild(trst);
        
        //IDを作成
        const tdId = document.createElement('td') ;
        tdId.innerHTML = i;  

        //作ったtrを取得して追加
        const trTag = document.getElementById("trtag" + i); 
        trTag.appendChild(tdId);

        
        job.push(task); //入力されたタスクを配列に追加する。

        //タスク用tdを作成して入力されたタスクを入れる。
        const tdTo = document.createElement('td');
        tdTo.innerHTML = task; 

        //trに追加する
        trTag.appendChild(tdTo);

        //tdを作成して「削除中」のボタンを作成する。
        const tdWork = document.createElement('td');
        const work = document.createElement('input');
        work.type = "button";
        work.class = "work";
        work.value = "作業中";
        work.addEventListener("click", changeValue);

        //tdをtrに追加して、tdに作業中を追加する
        trTag.appendChild(tdWork);
        tdWork.appendChild(work);

        ////tdを作成して「削除」のボタンを作成する。
        const tdDel = document.createElement('td');
        const del = document.createElement('input');
        del.type = "button";
        del.id = "del" + i;
        del.value = "削除";
        del.addEventListener("click", deletePar);

        trTag.appendChild(tdDel);
        tdDel.appendChild(del);

        i++;

        
        
});

    //作業中が押された時完了に変更する機能
    function changeValue(){
        work.value = "完了";
        work.id = "end";
    }
        

//削除が押された時に親要素を削除する機能
function deletePar(){
    document.parentElement()
};
        

    
        



        






