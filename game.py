import random, time, pygame, sys
import numpy as np
from pygame.locals import *

WINDOWWIDTH = 500
WINDOWHEIGHT = 700
boardArr = np.array([10,100])
posX = 5 #chracter position 
posY = 0

def main():
    global FPSCLOCK, DISPLAYSURF, BASICFONT, BIGFONT
    pygame.init()
    FPSCLOCK = pygame.time.Clock()
    DISPLAYSURF = pygame.display.set_mode((WINDOWWIDTH, WINDOWHEIGHT))
    BASICFONT = pygame.font.Font('freesansbold.ttf', 18)
    BIGFONT = pygame.font.Font('freesansbold.ttf', 100)
    pygame.display.set_caption('Cotton Candy')

    while True: # game loop
        runGame()
        showTextScreen('Game Over')


def runGame():
	global posX, posY
	#setup variables and stuff
	direction = "down"
	if direction == "right":
		#make picture of character moving right
	elif direction == "left":
		#make picture of character moving left
	elif direction == "up":
		#pic of character looking up
	else: #direction is down
		#picture of character moving down
		
	while True: #game loop
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

def canEat(x,y):
	#return true or false based on if can eat

def eat(direction):
	#say where the goal to eat is
	if canEat(goal):
		#thingsa
		
def move(direction):
	global characterX