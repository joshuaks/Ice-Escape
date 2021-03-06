//<!--JOSHUA SARVER-->
//<!--COPYRIGHT 05/05/15-->
//<!--CPSC 217 FINAL PROJECT-->
//<!--SPRING 2015-->
//
//<!--THIS IS AN INTERACTIVE GAME TO SATISFY THE REQUIREMENTS OF THE ASSIGNMENT-->
//<!--EVERYTHING IS DRAWN AND ANIMATED WITH CANVAS VIA JAVASCRIPT-->
//
//<!--OBJECTS WERE POINTLESS IN SOME CASES AS IS SOME OF THE INHERITANCE (LIKE WITH THE MENUS) -->
//<!--    BUT IT WAS A GOOD WAY TO LEARN ADVANCED JAVASCRIPT AND-->
//<!--    IT MAKES THE CODE REALLY NICE AND MODULAR FOR FUTURE DEVELOPMENT-->
//
//<!--YOU'LL NOTICE SOME MODULES ARE INCOMPLETE AS I INTEND TO CONTINUE THIS PROJECT AFTER THE CLASS-->
//<!--FOR EXAMPLE: I'D LIKE TO ADD OBJECTS TO AVOID AND OBJECTS TO HELP THE PLAYER LEVEL UP-->
//<!--USING A RANDOM N-GON ALGORITHM TO GENERATE ICEBERGS WOULD BE NEAT, ALSO-->





"use strict"
LostMenu.prototype = Menu.prototype
LostMenu.prototype.constructor = LostMenu


function LostMenu() {
    var TITLE_TEXT = "You sunk!"
    var MENU_NAME = "lostMenu"

    var tempButton
    var buttonsArray = []

    tempButton = new Button("replay", GAME_SCREEN)
    buttonsArray.push(tempButton)

    tempButton = new Button("toggle music", LOST_SCREEN)
    tempButton.action = toggleSound
    buttonsArray.push(tempButton)

//        tempButton = new Button("share", SHARE_SCREEN)
//        buttonsArray.push(tempButton)

    tempButton = new Button("help/credits", HELP_SETTINGS_SCREEN)
    buttonsArray.push(tempButton)
        

    Menu.call(this, TITLE_TEXT, MENU_NAME, buttonsArray)


};


LostMenu.prototype.writeScore = function(score){
    var yPos = this.getMenuTitleYPosition + 50
    var xPos = this.getMenuTitleXPosition
    var scoreString = " points"
//    alert(score)
    
    this.getContext().fillStyle = this.FONT_COLOR
    this.getContext().font = this.FONT_TYPE
    this.getContext().textAlign = this.MENU_TITLE_ALIGNMENT
//    alert(this.getContext())
     this.getContext().fillText('SOMETEXT', xPos, yPos)
}