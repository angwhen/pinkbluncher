import random, time, pygame, sys
import numpy as np
from pygame.locals import *

WINDOWWIDTH = 500
WINDOWHEIGHT = 700
boardArr = np.array([200,10])
posX = 5 #chracter position
posY = 0
direction = "down"
score = 0
fullness = 0
numLives = 0
def initBoardArr():
    global boardArr
    #initialize boardArr
    choices = [1,2,3,4,5] #pink, purple, blue, 100 point jewels, 200 point jewels
    boardArr = np.random.choice(choices,(200,10),p=[0.3,0.3,0.3,0.05,0.05])
    print boardArr
    #print "HIIII"
    #print "hey"

def main():
    global FPSCLOCK, DISPLAYSURF, BASICFONT, BIGFONT
    pygame.init()
    print "in main"
    FPSCLOCK = pygame.time.Clock()
    DISPLAYSURF = pygame.display.set_mode((WINDOWWIDTH, WINDOWHEIGHT))
    DISPLAYSURF.fill((255,255,255))
    BASICFONT = pygame.font.Font('freesansbold.ttf', 18)
    BIGFONT = pygame.font.Font('freesansbold.ttf', 100)
    pygame.display.set_caption('Cotton Candy')
    initBoardArr()
    renderScreen()
    while True: # game loop
        runGame()
        showTextScreen('Game Over')
def runGame():
    global posX, posY,direction
    #setup variables and stuff
    #direction = "down"
    while True:
        #game loop
        #if direction == "right":
        #    print "HI"
        #make picture of character moving right
        #elif direction == "left":
        #    print "HI"
        #make picture of character moving left
        #elif direction == "up":
        #    print "HI"
        #pic of character looking up
        #else: #direction is down
        #    print "HI"
        #picture of character moving down
        for event in pygame.event.get(): # event handling loop
            if event.type == KEYDOWN:
                if (event.key == K_LEFT or event.key == K_a):
                    if(direction == "left"):
                        move(direction)
                    direction = "left"
                elif (event.key == K_RIGHT or event.key == K_d) :
                    if(direction == "right"):
                        move(direction)
                    direction = "right"
                elif (event.key == K_UP or event.key == K_w):
                    direction == "up"
                elif (event.key == K_DOWN or event.key == K_s):
                    if(direction == "down"):
                        move(direction)
                    direction == "down"
                elif event.key == K_SPACE: #eat
                    eat(direction)
#def canEat(x,y):
    #return true or false based on if can eat
def eat(direction):
    global posX,posY,boardArr, score
    goal = (0,0)
#    if (direction == "right"):
#        goal = ()
    #say where the goal to eat is
#    if canEat(goal):
#        fullness +=1
        #other eating things
def move(direction):
    global posX, posY,boardArr
    #if moving downwards move the screen downwards
    renderScreen()

def renderCharacter():
    global posX,posY,boardArr, DISPLAYSURF,direction
    myimage = pygame.image.load("rightCharacter.png")
    imagerect = myimage.get_rect()
    if direction == "right":
	myimage = pygame.image.load("rightCharacter.png")
	imagerect = myimage.get_rect()
    DISPLAYSURF.fill((255,255,255))
    print "hello"
    DISPLAYSURF.blit(myimage, imagerect)
    pygame.display.flip()
	
def renderScreen():
    global posX,posY,boardArr, DISPLAYSURF
    renderCharacter()
    #draw the screen where it should be
    

#def die():
    #what happens when you die


if __name__ == '__main__':
    main()
