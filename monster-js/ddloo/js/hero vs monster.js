//hero与BOSS的血条
var hero_blood = document.getElementById("hero-bar-hp");
var hero_width = 100;
var monster_blood = document.getElementById("monster-bar-hp");
var monster_width = 100;
//普通技能与暗器命中率
var hit_rate = 0.8;
//hero与BOSS的防御(受到伤害 = 攻击力 * (1 - 护甲 * 10%)
var hero_armor = 1;
var monster_armor = 2; 
//获取要显示技能的iD
var skillDominance = document.getElementById("btn-skill-dominance");
var heroSkillEle = document.getElementById("div-skill-name");

//显示技能
skillDominance.onmouseover = function(){
    heroSkillEle.style.display = "inline-block";
}
skillDominance.onmouseout = function(){
    heroSkillEle.style.display = "none";
}
heroSkillEle.onmousemove = function(){
    heroSkillEle.style.display = "inline-block";
}
heroSkillEle.onmouseout = function(){
    heroSkillEle.style.display = "none";
}

//获取要显示暗器的iD
var weaponDominance = document.getElementById("btn-hide-weapon");
var heroWeaponEle = document.getElementById("div-hide-weapon");

//显示暗器
weaponDominance.onmouseover = function(){
    heroWeaponEle.style.display = "inline-block";
}
heroWeaponEle.onmouseout = function(){
    heroWeaponEle.style.display = "none";
}
heroWeaponEle.onmousemove = function(){
    heroWeaponEle.style.display = "inline-block";
}
weaponDominance.onmouseout = function(){
    heroWeaponEle.style.display = "none";
}

//判断是否没血
var sum = 0;
function isNoBlood(){
    if (monster_blood.innerHTML <= 0){
        monster_blood.innerHTML = 0;
        monster_width = 0;
        sum = 1;
    }
    if (hero_blood.innerHTML <= 0){
        hero_blood.innerHTML = 0;
        hero_width = 0;
        sum = 2;
    }
}

//判断哪方胜利
function win(){
    if (sum == 1)
        alert("You win!!");
    else if (sum == 2)
        alert("You lose!!");
}
//动画效果
    //技能、暗器信息显示动画
    var skill_information = ["比卡丘对敌人抛起了媚眼,敌人将被魅惑两回合"
                            ,"比卡丘呆住了,陷入沉思,回复一定血量"
                            ,"比卡丘用它巨大无比的铁拳试图感化敌人,造成较大伤害"];
    var weapon_information = ["用枕头来打人,伤害比普攻稍高"
                             ,"杀伤力巨大的拖鞋,不过命中率很低"
                             ,"毒它个底翻天,敌人3回合持续扣血"
                             ,"顾名思义就是破甲"];
    var information = document.getElementById("skill-weapon-information");
    var skill_className = document.getElementsByClassName("skill-name");
    var weapon_className = document.getElementsByClassName("hide-weapon");
    function skill_message_arise(i){
        information.innerHTML = skill_information[i];
        information.style.opacity = "1";
    }
    function weapon_message_arise(i){
        information.innerHTML = weapon_information[i];
        information.style.opacity = "1";
    }
    function message_disappear(){
        information.style.opacity = "0";
    }
    //扣血动画
    var hero_img = document.getElementById("img-myhero");
    var monster_img = document.getElementById("img-monster");
    function monster_animation_harm(){
        monster_img.style.animation = "imgmonster .4s ease";
    }
    function hero_animation_harm(){
        hero_img.style.animation = "imghero .4s ease .4s";
    }
    //动画执行一次后将animation属性值清空
    hero_img.addEventListener("animationend", heroEndAnimation);
    function heroEndAnimation(){
        this.style.animation = "";
    }
    monster_img.addEventListener("animationend", monsterEndAnimation);
    function monsterEndAnimation(){
        this.style.animation = "";
    }
//动画效果


//回合制战斗效果
    //BOSS攻击效果
    var tempt_count = 0;                        //BOSS是否被魅惑
    function monsterAttack(){
        if (tempt_count > 0){
            var harm = Math.floor(Math.random()*19 + 1);
            harm = Math.floor(harm - harm * hero_armor * 0.1);
            hero_width -= harm;
            hero_blood.innerHTML -= harm;
            hero_animation_harm();
            hero_blood.style.width = hero_width + "%";
        }
    }

    //菜鸡互啄函数
    //harm = 伤害, hit_rate = 命中率, blood_width = 扣血百分比
    function mutual_injury(harm, hit_rate, blood_width){
        tempt_count++;
        if (Math.random() <= hit_rate){
            harm = Math.floor(harm - harm * monster_armor * 0.1);
            monster_blood.innerHTML -= harm;
            monster_width -= blood_width;
            monster_blood.style.width = monster_width + "%";
            monster_animation_harm();
            
        }
        poison();
        armor_break();
        monsterAttack();
        isNoBlood();
        win();
    }

    //按下攻击键时BOSS发生扣血函数
    var hero_attack = 49;
    //普攻100%命中
    function blood_deduction(){
        if (hero_blood.innerHTML > 0 && monster_blood.innerHTML > 0){
            var harm = Math.floor(Math.random() * hero_attack + 1);
            var blood_width = harm/10;
            mutual_injury(harm, 1, blood_width);
        }
    }

    //按下技能键发生的函数
    function btnSkill(name){
        if (hero_blood.innerHTML > 0 && monster_blood.innerHTML > 0){
            //铁拳技能
            if (name === "fist"){
                var harm = Math.floor(Math.random()*50 + 50);
                var blood_width = harm/10;
                mutual_injury(harm, hit_rate, blood_width);
            }
            //魅惑技能
            else if (name === "tempt"){
                tempt_count = -2;                  //BOSS被诱惑次数不会叠加
                mutual_injury(0, 0, 0);
            }
            //呆若木鸡技能(回春术)
            else if(name === "immobility"){
                var return_blood = -30;
                var loss_blodd = 100 - hero_blood.innerHTML;
                hero_width += loss_blodd/2;
                hero_blood.innerHTML -= return_blood;
                if (hero_blood.innerHTML >= 100){
                    hero_blood.innerHTML = 100;
                    hero_width = 100;
                }
                mutual_injury(0, 0, 0);
                hero_blood.style.width = hero_width + "%";
            }
        }
    }

    //按下暗器键发生的函数
    var posion_count = 0;                      //毒状态的回合数 
    var armor_count = 0;					   //破防的回合数
    function btnWeapon(weapon){
        if (hero_blood.innerHTML > 0 && monster_blood.innerHTML > 0){
            //枕头伤害:攻击的1.4倍
            if (weapon === "pillow"){
                var harm = (hero_attack * 1.4);
                var blood_width = harm/10;
                harm = Math.floor(harm);
                mutual_injury(harm, hit_rate, blood_width);
            }
            //拖鞋伤害:攻击的3倍(30%命中)
            else if (weapon === "slipper"){
                var harm = (hero_attack * 3);
                var blood_width = 40/3;
                harm = Math.floor(harm);
                mutual_injury(harm, 0.3, blood_width);
            }
            //给BOSS上'毒'状态:每回合持续扣血(boss总血量的10%)
            else if (weapon === "poison"){
                mutual_injury(0,0,0);
                posion_count = 3;
            }
            //破防
            else if(weapon === "armor_break"){
                mutual_injury(0,0,0);
                armor_count = 3;
                monster_armor = 1;
            }
        }
    }

    //毒状态
    function poison(){
        if (posion_count){
            posion_count--;
            var poison_width = 10; 
            monster_blood.innerHTML -=  1000 * 0.1;
            monster_width -= poison_width;
            monster_blood.style.width = monster_width + "%";   
        }
    }

    //破防状态
    function armor_break(){
        if (!armor_count)
            monster_armor = 2;
        else
            armor_count--;
    }
//回合制战斗效果