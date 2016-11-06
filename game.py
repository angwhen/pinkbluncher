import random, time, pygame, sys
import numpy as np
from pygame.locals import *

WINDOWWIDTH = 500
WINDOWHEIGHT = 700
boardArrHeight = 200;
boardArr = np.array([boardArrHeight,10])
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
    boardArr = np.random.choice(choices,(boardArrHeight,10),p=[0.3,0.3,0.3,0.05,0.05])
    boardArr[posY,posX] = 0
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
		    print "left pressed"
                    if(direction == "left"):
                        move(direction)
                    direction = "left"
                elif (event.key == K_RIGHT or event.key == K_d) :
                    print "right pressed"
		    if(direction == "right"):
                        move(direction)
                    direction = "right"
                elif (event.key == K_UP or event.key == K_w):
		    print "up pressed"
                    direction == "up"
                elif (event.key == K_DOWN or event.key == K_s):
		    print "down pressed"
                    if(direction == "down"):
                        move(direction)
                    direction == "down"
                elif event.key == K_SPACE: #eat
		    print "eating direction is ", direction
                    eat(direction)
def canEat(goal):
    global boardArr
    if goal[0] < 0 or goal[1] < 0 or goal[0] >=10:
	print "cant eat because off screen"
	return False
    row = goal[0]
    col = goal[1]
    if boardArr[row,col] == 0:
	print "cant eat because empty there: " ,direction
        return False
    else:
	return True 
    #return true or false based on if can eat

def eat(direction):
    global posX,posY,boardArr,fullness, score
    goal = (0,0)
    if direction == "right":
        goal = (posY,posX+1)
    elif direction == "left":
	goal = (posY,posX-1)
    elif direction == "down":
	goal = (posY+1,posX)
	
    #say where the goal to eat is
    if canEat(goal): 
	fullness +=1
	row = goal[0]
	col = goal[1]
	boardArr[row,col] = 0
        #other eating things
    renderScreen()
	
def move(direction):
    global posX, posY,boardArr
    if direction == "right":
        posX += 1
    elif direction == "left":
	posX = posX -1
    elif direction == "down":
	posY += 1
    #if moving downwards move the screen downwards
    renderScreen()

def renderCharacter():
    global posX,posY,boardArr, DISPLAYSURF,direction
    myimage = pygame.image.load("rightCharacter.png")
    imagerect = myimage.get_rect()
    if direction == "right":
	myimage = pygame.image.load("rightCharacter.png")
	imagerect = myimage.get_rect()
    #DISPLAYSURF.fill((255,255,255))
    pygame.draw.rect(DISPLAYSURF,(89,34,32),pygame.Rect(posX*50,300+posY*50,50,50),0)
    #print "hello"
    #DISPLAYSURF.blit(myimage, imagerect)
    pygame.display.flip()
	
def renderScreen():
    global posX,posY,boardArr, boardArrHeight, DISPLAYSURF
    startPos = posY-6
    if startPos < 0: 
	startPos = 0
    PINK = (255,0,128)
    PURPLE = (147,112,219)
    BLUE = (135,216,250)
    WHITE = (255,255,255)
    color = WHITE
    for i in xrange(startPos,boardArrHeight):
	for j in xrange(0,10):
	    tileType = boardArr[i,j]
	    if tileType == 1:
		color = PINK
	    elif tileType == 2:
		color = PURPLE
	    elif tileType == 3:
		color = BLUE
	    elif tileType == 4 or tileType == 5:
		color = (0,0,0)
	    else:
		color = WHITE
	    pygame.draw.rect(DISPLAYSURF,color,pygame.Rect(j*50,300+i*50,50,50),0)
	    pygame.draw.rect(DISPLAYSURF,WHITE,pygame.Rect(j*50,300+i*50,50,50),5)
    renderCharacter()
    pygame.display.flip()
	    
    #draw the screen where it should be
    

#def die():
    #what happens when you die


if __name__ == '__main__':
    main()
