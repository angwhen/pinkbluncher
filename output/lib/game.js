/* start module: game */
$pyjs['loaded_modules']['game'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['game']['__was_initialized__']) return $pyjs['loaded_modules']['game'];
	var $m = $pyjs['loaded_modules']['game'];
	$m['__repr__'] = function() { return '<module: game>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'game';
	$m['__name__'] = __mod_name__;


	$m['random'] = $p['___import___']('random', null);
	$m['time'] = $p['___import___']('time', null);
	$m['pygame'] = $p['___import___']('pygame', null);
	$m['sys'] = $p['___import___']('sys', null);
	$m['np'] = $p['___import___']('numpy', null, null, false);
	$p['__import_all__']('pygame.locals', null, $m, null, false);
	$m['pyjs'] = $p['___import___']('pyjs', null);
	$m['WINDOWWIDTH'] = 500;
	$m['WINDOWHEIGHT'] = 700;
	$m['boardArrHeight'] = 200;
	$m['boardArr'] = $m['np']['array']($p['list']([$m['boardArrHeight'], 10]));
	$m['posX'] = 5;
	$m['posY'] = 0;
	$m['direction'] = 'down';
	$m['score'] = 0;
	$m['stomachSpace'] = 100;
	$m['numLives'] = 0;
	$m['collapseGroupHolder'] = $m['np']['zeros']($p['tuple']([$m['boardArrHeight'], 10]));
	$m['initBoardArr'] = function() {
		var choices;
		choices = $p['list']([1, 2, 3, 4, 5]);
		$m['boardArr'] = $pyjs_kwargs_call($m['np']['random'], 'choice', null, null, [{'p':$p['list']([0.3, 0.3, 0.3, 0.05, 0.05])}, choices, $p['tuple']([$m['boardArrHeight'], 10])]);
		$m['boardArr']['__setitem__']($p['tuple']([$m['posY'], $m['posX']]), 0);
		$p['printFunc']([$m['boardArr']], 1);
		return null;
	};
	$m['initBoardArr']['__name__'] = 'initBoardArr';

	$m['initBoardArr']['__bind_type__'] = 0;
	$m['initBoardArr']['__args__'] = [null,null];
	$m['main'] = function() {

		$m['pygame']['init']();
		$p['printFunc'](['in main'], 1);
		$m['FPSCLOCK'] = $m['pygame']['time']['Clock']();
		$m['DISPLAYSURF'] = $m['pygame']['display']['set_mode']($p['tuple']([$m['WINDOWWIDTH'], $m['WINDOWHEIGHT']]));
		$m['DISPLAYSURF']['fill']($p['tuple']([255, 255, 255]));
		$m['BASICFONT'] = $m['pygame']['font']['Font']('freesansbold.ttf', 18);
		$m['BIGFONT'] = $m['pygame']['font']['Font']('freesansbold.ttf', 100);
		$m['pygame']['display']['set_caption']('Cotton Candy');
		$m['initBoardArr']();
		(typeof renderScreen == "undefined"?$m['renderScreen']:renderScreen)();
		while ($p['bool'](true)) {
			(typeof runGame == "undefined"?$m['runGame']:runGame)();
			(typeof showTextScreen == "undefined"?$m['showTextScreen']:showTextScreen)('Game Over');
		}
		return null;
	};
	$m['main']['__name__'] = 'main';

	$m['main']['__bind_type__'] = 0;
	$m['main']['__args__'] = [null,null];
	$m['runGame'] = function() {
		var $or5,$or4,$or6,$iter1_nextval,$iter1_type,$or3,$or2,$or8,$or7,$iter1_iter,$iter1_array,$or1,event,$iter1_idx;
		while ($p['bool'](true)) {
			(typeof collapse == "undefined"?$m['collapse']:collapse)();
			$iter1_iter = $m['pygame']['event']['get']();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				event = $iter1_nextval['$nextval'];
				if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), (typeof KEYDOWN == "undefined"?$m['KEYDOWN']:KEYDOWN)))) {
					if ($p['bool'](($p['bool']($or1=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_LEFT == "undefined"?$m['K_LEFT']:K_LEFT)))?$or1:$p['op_eq']($p['getattr'](event, 'key'), (typeof K_a == "undefined"?$m['K_a']:K_a))))) {
						$p['printFunc'](['left pressed'], 1);
						if ($p['bool']($p['op_eq']($m['direction'], 'left'))) {
							(typeof move == "undefined"?$m['move']:move)($m['direction']);
						}
						$m['direction'] = 'left';
					}
					else if ($p['bool'](($p['bool']($or3=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_RIGHT == "undefined"?$m['K_RIGHT']:K_RIGHT)))?$or3:$p['op_eq']($p['getattr'](event, 'key'), (typeof K_d == "undefined"?$m['K_d']:K_d))))) {
						$p['printFunc'](['right pressed'], 1);
						if ($p['bool']($p['op_eq']($m['direction'], 'right'))) {
							(typeof move == "undefined"?$m['move']:move)($m['direction']);
						}
						$m['direction'] = 'right';
					}
					else if ($p['bool'](($p['bool']($or5=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_UP == "undefined"?$m['K_UP']:K_UP)))?$or5:$p['op_eq']($p['getattr'](event, 'key'), (typeof K_w == "undefined"?$m['K_w']:K_w))))) {
						$p['printFunc'](['up pressed'], 1);
						$p['op_eq']($m['direction'], 'up');
					}
					else if ($p['bool'](($p['bool']($or7=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_DOWN == "undefined"?$m['K_DOWN']:K_DOWN)))?$or7:$p['op_eq']($p['getattr'](event, 'key'), (typeof K_s == "undefined"?$m['K_s']:K_s))))) {
						$p['printFunc'](['down pressed'], 1);
						if ($p['bool']($p['op_eq']($m['direction'], 'down'))) {
							(typeof move == "undefined"?$m['move']:move)($m['direction']);
						}
						$m['direction'] = 'down';
					}
					else if ($p['bool']($p['op_eq']($p['getattr'](event, 'key'), (typeof K_SPACE == "undefined"?$m['K_SPACE']:K_SPACE)))) {
						$p['printFunc'](['eating direction is ', $m['direction']], 1);
						(typeof eat == "undefined"?$m['eat']:eat)($m['direction']);
					}
					(typeof renderScreen == "undefined"?$m['renderScreen']:renderScreen)();
				}
			}
		}
		return null;
	};
	$m['runGame']['__name__'] = 'runGame';

	$m['runGame']['__bind_type__'] = 0;
	$m['runGame']['__args__'] = [null,null];
	$m['canEat'] = function(goal) {
		var $or9,$or11,$or10,col,row;
		if ($p['bool'](($p['bool']($or9=($p['cmp'](goal['__getitem__'](0), 0) == -1))?$or9:($p['bool']($or10=($p['cmp'](goal['__getitem__'](1), 0) == -1))?$or10:((($p['cmp'](goal['__getitem__'](1), 10))|1) == 1))))) {
			$p['printFunc'](['cant eat because off screen'], 1);
			return false;
		}
		row = goal['__getitem__'](0);
		col = goal['__getitem__'](1);
		if ($p['bool']($p['op_eq']($m['boardArr']['__getitem__']($p['tuple']([row, col])), 0))) {
			$p['printFunc'](['cant eat because empty there: ', $m['direction']], 1);
			return false;
		}
		else {
			return true;
		}
		return null;
	};
	$m['canEat']['__name__'] = 'canEat';

	$m['canEat']['__bind_type__'] = 0;
	$m['canEat']['__args__'] = [null,null,['goal']];
	$m['eat'] = function(direction) {
		var goal,$add3,row,$add2,$sub2,$sub4,$add4,$sub3,$sub1,$add1,col;
		goal = $p['tuple']([0, 0]);
		if ($p['bool']($p['op_eq'](direction, 'right'))) {
			goal = $p['tuple']([$m['posY'], $p['__op_add']($add1=$m['posX'],$add2=1)]);
		}
		else if ($p['bool']($p['op_eq'](direction, 'left'))) {
			goal = $p['tuple']([$m['posY'], $p['__op_sub']($sub1=$m['posX'],$sub2=1)]);
		}
		else if ($p['bool']($p['op_eq'](direction, 'down'))) {
			goal = $p['tuple']([$p['__op_add']($add3=$m['posY'],$add4=1), $m['posX']]);
		}
		if ($p['bool']($m['canEat'](goal))) {
			$m['stomachSpace'] = $p['__op_sub']($sub3=$m['stomachSpace'],$sub4=1);
			row = goal['__getitem__'](0);
			col = goal['__getitem__'](1);
			(typeof getEatGroup == "undefined"?$m['getEatGroup']:getEatGroup)(goal, $m['boardArr']['__getitem__']($p['tuple']([row, col])));
		}
		(typeof collapse == "undefined"?$m['collapse']:collapse)();
		(typeof renderScreen == "undefined"?$m['renderScreen']:renderScreen)();
		return null;
	};
	$m['eat']['__name__'] = 'eat';

	$m['eat']['__bind_type__'] = 0;
	$m['eat']['__args__'] = [null,null,['direction']];
	$m['getEatGroup'] = function(goal, tileType) {
		var $sub16,row,$sub9,$sub8,$sub12,$sub7,$sub6,$sub5,$sub10,$sub13,$and1,$and2,$and3,$and4,$and5,$and6,$sub14,$add14,$add15,$add16,$add10,$add11,$add12,$add13,$sub15,$add6,$add7,$add5,$sub11,$add8,$add9,col;
		row = goal['__getitem__'](0);
		col = goal['__getitem__'](1);
		$p['printFunc'](['tile type is: ', $m['boardArr']['__getitem__']($p['tuple']([row, col]))], 1);
		$m['boardArr']['__getitem__'](row)['__setitem__'](col, 0);
		$m['score'] = $p['__op_add']($add5=$m['score'],$add6=1);
		if ($p['bool'](($p['bool']($and1=($p['cmp']($p['__op_add']($add7=col,$add8=1), 10) == -1))?$p['op_eq']($m['boardArr']['__getitem__'](row)['__getitem__']($p['__op_add']($add9=col,$add10=1)), tileType):$and1))) {
			$m['getEatGroup']($p['tuple']([row, $p['__op_add']($add11=col,$add12=1)]), tileType);
		}
		if ($p['bool'](($p['bool']($and3=((($p['cmp']($p['__op_sub']($sub5=col,$sub6=1), 0))|1) == 1))?$p['op_eq']($m['boardArr']['__getitem__'](row)['__getitem__']($p['__op_sub']($sub7=col,$sub8=1)), tileType):$and3))) {
			$m['getEatGroup']($p['tuple']([row, $p['__op_sub']($sub9=col,$sub10=1)]), tileType);
		}
		if ($p['bool']($p['op_eq']($m['boardArr']['__getitem__']($p['__op_add']($add13=row,$add14=1))['__getitem__'](col), tileType))) {
			$m['getEatGroup']($p['tuple']([$p['__op_add']($add15=row,$add16=1), col]), tileType);
		}
		if ($p['bool'](($p['bool']($and5=((($p['cmp']($p['__op_sub']($sub11=row,$sub12=1), 0))|1) == 1))?$p['op_eq']($m['boardArr']['__getitem__']($p['__op_sub']($sub13=row,$sub14=1))['__getitem__'](col), tileType):$and5))) {
			$m['getEatGroup']($p['tuple']([$p['__op_sub']($sub15=row,$sub16=1), col]), tileType);
		}
		return null;
	};
	$m['getEatGroup']['__name__'] = 'getEatGroup';

	$m['getEatGroup']['__bind_type__'] = 0;
	$m['getEatGroup']['__args__'] = [null,null,['goal'],['tileType']];
	$m['collapsable'] = function(row, col, num) {
		var $sub22,$sub20,$sub21,$sub19,$add21,$add20,$add23,$add22,$add25,$add24,$add26,$and8,$and9,sameType,$sub18,$sub17,$and7,$and10,$add17,$add18,$add19,$or15,$or14,$or13,$or12;
		sameType = $m['boardArr']['__getitem__'](row)['__getitem__'](col);
		if ($p['bool']($p['op_eq'](sameType, 0))) {
			return false;
		}
		if ($p['bool'](($p['bool']($and7=($p['cmp']($p['__op_add']($add17=col,$add18=1), 10) == -1))?($p['bool']($or12=$p['op_eq']($m['boardArr']['__getitem__'](row)['__getitem__']($p['__op_add']($add19=col,$add20=1)), sameType))?$or12:($p['cmp'](num, 0) == 1)):$and7))) {
			if ($p['bool'](!$p['bool']($m['collapsable'](row, $p['__op_add']($add21=col,$add22=1), $p['__op_add']($add23=num,$add24=1))))) {
				return false;
			}
		}
		if ($p['bool'](($p['bool']($and9=((($p['cmp']($p['__op_sub']($sub17=row,$sub18=1), 0))|1) == 1))?($p['bool']($or14=$p['op_eq']($m['boardArr']['__getitem__']($p['__op_sub']($sub19=row,$sub20=1))['__getitem__'](col), sameType))?$or14:($p['cmp'](num, 0) == 1)):$and9))) {
			if ($p['bool'](!$p['bool']($m['collapsable']($p['__op_sub']($sub21=row,$sub22=1), col, $p['__op_add']($add25=num,$add26=1))))) {
				return false;
			}
		}
		return true;
	};
	$m['collapsable']['__name__'] = 'collapsable';

	$m['collapsable']['__bind_type__'] = 0;
	$m['collapsable']['__args__'] = [null,null,['row'],['col'],['num']];
	$m['getCollapseGroup'] = function(row, col, tileType) {
		var $sub23,$sub26,$sub27,$sub24,$sub25,$sub28,$sub29,done,$add41,$and22,$and21,$and20,$add29,$add28,group,$add42,$add27,$add40,$sub31,$sub30,$sub33,$sub32,$sub35,$sub34,$sub37,$sub36,$sub38,$and12,$and13,$and11,$and16,$and17,$and14,$and15,$and18,$and19,$add38,$add39,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35;
		group = $p['list']([]);
		done = 0;
		if ($p['bool']($p['op_eq']($m['collapseGroupHolder']['__getitem__'](row)['__getitem__'](col), 0))) {
			group['append']($p['tuple']([row, col]));
		}
		$m['collapseGroupHolder']['__getitem__'](row)['__setitem__'](col, 1);
		if ($p['bool'](($p['bool']($and11=($p['cmp']($p['__op_add']($add27=col,$add28=1), 10) == -1))?($p['bool']($and12=$p['op_eq']($m['boardArr']['__getitem__'](row)['__getitem__']($p['__op_add']($add29=col,$add30=1)), tileType))?$p['op_eq']($m['collapseGroupHolder']['__getitem__'](row)['__getitem__']($p['__op_add']($add31=col,$add32=1)), 0):$and12):$and11))) {
			group['extend']($m['getCollapseGroup'](row, $p['__op_add']($add33=col,$add34=1), tileType));
		}
		if ($p['bool'](($p['bool']($and14=((($p['cmp']($p['__op_sub']($sub23=col,$sub24=1), 0))|1) == 1))?($p['bool']($and15=$p['op_eq']($m['boardArr']['__getitem__'](row)['__getitem__']($p['__op_sub']($sub25=col,$sub26=1)), tileType))?$p['op_eq']($m['collapseGroupHolder']['__getitem__'](row)['__getitem__']($p['__op_sub']($sub27=col,$sub28=1)), 0):$and15):$and14))) {
			group['extend']($m['getCollapseGroup'](row, $p['__op_sub']($sub29=col,$sub30=1), tileType));
		}
		if ($p['bool'](($p['bool']($and17=($p['cmp']($p['__op_add']($add35=row,$add36=1), $m['boardArrHeight']) == -1))?($p['bool']($and18=$p['op_eq']($m['boardArr']['__getitem__']($p['__op_add']($add37=row,$add38=1))['__getitem__'](col), tileType))?$p['op_eq']($m['collapseGroupHolder']['__getitem__']($p['__op_add']($add39=row,$add40=1))['__getitem__'](col), 0):$and18):$and17))) {
			group['extend']($m['getCollapseGroup']($p['__op_add']($add41=row,$add42=1), col, tileType));
		}
		if ($p['bool'](($p['bool']($and20=((($p['cmp']($p['__op_sub']($sub31=row,$sub32=1), 0))|1) == 1))?($p['bool']($and21=$p['op_eq']($m['boardArr']['__getitem__']($p['__op_sub']($sub33=row,$sub34=1))['__getitem__'](col), tileType))?$p['op_eq']($m['collapseGroupHolder']['__getitem__']($p['__op_sub']($sub35=row,$sub36=1))['__getitem__'](col), 0):$and21):$and20))) {
			group['extend']($m['getCollapseGroup']($p['__op_sub']($sub37=row,$sub38=1), col, tileType));
		}
		return group;
	};
	$m['getCollapseGroup']['__name__'] = 'getCollapseGroup';

	$m['getCollapseGroup']['__bind_type__'] = 0;
	$m['getCollapseGroup']['__args__'] = [null,null,['row'],['col'],['tileType']];
	$m['canCollapse'] = function(group) {
		var $add48,$iter2_nextval,$iter2_type,$iter2_iter,$and25,i,$add46,$add45,$add44,$add43,$add47,$iter2_idx,can,$and23,$iter2_array,$and24;
		can = true;
		$iter2_iter = group;
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
			i = $iter2_nextval['$nextval'];
			if ($p['bool'](($p['bool']($and23=!group['__contains__']($p['tuple']([$p['__op_add']($add43=i['__getitem__'](0),$add44=1), i['__getitem__'](1)])))?($p['bool']($and24=($p['cmp']($p['__op_add']($add45=i['__getitem__'](0),$add46=1), $m['boardArrHeight']) == -1))?!$p['op_eq']($m['boardArr']['__getitem__']($p['tuple']([$p['__op_add']($add47=i['__getitem__'](0),$add48=1), i['__getitem__'](1)])), 0):$and24):$and23))) {
				can = false;
			}
		}
		return can;
	};
	$m['canCollapse']['__name__'] = 'canCollapse';

	$m['canCollapse']['__bind_type__'] = 0;
	$m['canCollapse']['__args__'] = [null,null,['group']];
	$m['collapseGroup'] = function(group) {
		var $add50,$add51,$add52,$iter3_idx,$add49,i,$iter3_nextval,$iter3_type,$iter3_iter,$iter3_array;
		$iter3_iter = group;
		$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
		while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
			i = $iter3_nextval['$nextval'];
			if ($p['bool'](($p['cmp']($p['__op_add']($add49=i['__getitem__'](0),$add50=1), $m['boardArrHeight']) == -1))) {
				$m['boardArr']['__setitem__']($p['tuple']([$p['__op_add']($add51=i['__getitem__'](0),$add52=1), i['__getitem__'](1)]), $m['boardArr']['__getitem__']($p['tuple']([i['__getitem__'](0), i['__getitem__'](1)])));
				$m['boardArr']['__setitem__']($p['tuple']([i['__getitem__'](0), i['__getitem__'](1)]), 0);
			}
		}
		return null;
	};
	$m['collapseGroup']['__name__'] = 'collapseGroup';

	$m['collapseGroup']['__bind_type__'] = 0;
	$m['collapseGroup']['__args__'] = [null,null,['group']];
	$m['collapse'] = function() {
		var $iter5_nextval,$iter5_idx,$iter5_iter,$iter4_type,$sub41,$sub40,$iter5_type,$sub42,$iter4_iter,startPos,group,$iter5_array,$sub39,$mul4,$mul3,$mul2,$mul1,$add53,$add54,i,$iter4_nextval,j,$iter4_idx,$iter4_array;
		$iter4_iter = $p['xrange'](0, $p['__op_sub']($sub39=$m['boardArrHeight'],$sub40=1));
		$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
		while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
			i = $iter4_nextval['$nextval'];
			$iter5_iter = $p['xrange'](0, 10);
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				j = $iter5_nextval['$nextval'];
				startPos = $p['__op_sub']($sub41=300,$sub42=(typeof ($mul1=$m['posY'])==typeof ($mul2=50) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)));
				if ($p['bool'](($p['cmp']($p['__op_add']($add53=startPos,$add54=(typeof ($mul3=i)==typeof ($mul4=50) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))), 1000) == 1))) {
					break;
				}
				$m['collapseGroupHolder'] = $m['np']['zeros']($p['tuple']([$m['boardArrHeight'], 10]));
				group = $m['getCollapseGroup'](i, j, $m['boardArr']['__getitem__']($p['tuple']([i, j])));
				if ($p['bool']($m['canCollapse'](group))) {
					$m['collapseGroup'](group);
				}
			}
		}
		(typeof collapseCharacter == "undefined"?$m['collapseCharacter']:collapseCharacter)();
		return null;
	};
	$m['collapse']['__name__'] = 'collapse';

	$m['collapse']['__bind_type__'] = 0;
	$m['collapse']['__args__'] = [null,null];
	$m['collapseCharacter'] = function() {
		var $add55,$add56,$add57,$add58;
		while ($p['bool']($p['op_eq']($m['boardArr']['__getitem__']($p['tuple']([$p['__op_add']($add55=$m['posY'],$add56=1), $m['posX']])), 0))) {
			$m['posY'] = $p['__op_add']($add57=$m['posY'],$add58=1);
		}
		return null;
	};
	$m['collapseCharacter']['__name__'] = 'collapseCharacter';

	$m['collapseCharacter']['__bind_type__'] = 0;
	$m['collapseCharacter']['__args__'] = [null,null];
	$m['canMove'] = function(goal) {
		var $or17,$or16,$or18;
		if ($p['bool'](($p['bool']($or16=($p['cmp'](goal['__getitem__'](0), 0) == -1))?$or16:($p['bool']($or17=($p['cmp'](goal['__getitem__'](1), 0) == -1))?$or17:((($p['cmp'](goal['__getitem__'](1), 10))|1) == 1))))) {
			$p['printFunc'](['cant move because off screen y: ', goal['__getitem__'](0), ' x: ', goal['__getitem__'](1)], 1);
			return false;
		}
		return !$p['bool']($m['canEat'](goal));
	};
	$m['canMove']['__name__'] = 'canMove';

	$m['canMove']['__bind_type__'] = 0;
	$m['canMove']['__args__'] = [null,null,['goal']];
	$m['move'] = function(direction) {
		var $sub48,$sub49,$sub43,$sub44,$sub45,$sub46,$sub47,$add65,$add64,$add67,$add66,$add61,goal,$add63,$add62,$add69,$add68,$sub54,$sub53,$sub52,$sub51,$sub50,$add60,$add74,$add72,$add73,$add70,$add71,$add59;
		goal = $p['tuple']([0, 0]);
		if ($p['bool']($p['op_eq'](direction, 'right'))) {
			goal = $p['tuple']([$m['posY'], $p['__op_add']($add59=$m['posX'],$add60=1)]);
		}
		else if ($p['bool']($p['op_eq'](direction, 'left'))) {
			goal = $p['tuple']([$m['posY'], $p['__op_sub']($sub43=$m['posX'],$sub44=1)]);
		}
		else if ($p['bool']($p['op_eq'](direction, 'down'))) {
			goal = $p['tuple']([$p['__op_add']($add61=$m['posY'],$add62=1), $m['posX']]);
		}
		if ($p['bool']($m['canMove'](goal))) {
			if ($p['bool']($p['op_eq'](direction, 'right'))) {
				$m['posX'] = $p['__op_add']($add63=$m['posX'],$add64=1);
			}
			else if ($p['bool']($p['op_eq'](direction, 'left'))) {
				$m['posX'] = $p['__op_sub']($sub45=$m['posX'],$sub46=1);
			}
			else if ($p['bool']($p['op_eq'](direction, 'down'))) {
				$m['posY'] = $p['__op_add']($add65=$m['posY'],$add66=1);
			}
		}
		else if ($p['bool']($m['canMove']($p['tuple']([$p['__op_sub']($sub47=goal['__getitem__'](0),$sub48=1), goal['__getitem__'](1)])))) {
			if ($p['bool']($p['op_eq'](direction, 'right'))) {
				$m['posX'] = $p['__op_add']($add67=$m['posX'],$add68=1);
			}
			else if ($p['bool']($p['op_eq'](direction, 'left'))) {
				$m['posX'] = $p['__op_sub']($sub49=$m['posX'],$sub50=1);
			}
			$m['posY'] = $p['__op_sub']($sub51=$m['posY'],$sub52=1);
		}
		else if ($p['bool']($m['canMove']($p['tuple']([$p['__op_add']($add69=goal['__getitem__'](0),$add70=1), goal['__getitem__'](1)])))) {
			if ($p['bool']($p['op_eq'](direction, 'right'))) {
				$m['posX'] = $p['__op_add']($add71=$m['posX'],$add72=1);
			}
			else if ($p['bool']($p['op_eq'](direction, 'left'))) {
				$m['posX'] = $p['__op_sub']($sub53=$m['posX'],$sub54=1);
			}
			$m['posY'] = $p['__op_add']($add73=$m['posY'],$add74=1);
		}
		$m['collapse']();
		(typeof renderScreen == "undefined"?$m['renderScreen']:renderScreen)();
		return null;
	};
	$m['move']['__name__'] = 'move';

	$m['move']['__bind_type__'] = 0;
	$m['move']['__args__'] = [null,null,['direction']];
	$m['renderScoreAndStomach'] = function() {
		var $div1,text,textpos,$div2,scoreText,font;
		if ($p['bool']($p['getattr']($m['pygame'], 'font'))) {
			font = $m['pygame']['font']['Font'](null, 36);
			scoreText = $p['sprintf']('Score: %d    Belly Space: %d', $p['tuple']([$m['score'], $m['stomachSpace']]));
			text = font['render'](scoreText, 1, $p['tuple']([0, 0, 0]));
			textpos = $pyjs_kwargs_call(text, 'get_rect', null, null, [{'centerx':(typeof ($div1=$m['DISPLAYSURF']['get_width']())==typeof ($div2=2) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2))}]);
			$m['DISPLAYSURF']['blit'](text, textpos);
		}
		else {
			$p['printFunc'](['fonts disabled'], 1);
		}
		return null;
	};
	$m['renderScoreAndStomach']['__name__'] = 'renderScoreAndStomach';

	$m['renderScoreAndStomach']['__bind_type__'] = 0;
	$m['renderScoreAndStomach']['__args__'] = [null,null];
	$m['renderCharacter'] = function() {
		var $add89,$add88,$add100,$add83,$add82,$add81,$add80,$add87,$add86,$add85,$add84,$mul19,$mul18,$mul28,$mul26,$mul27,$mul24,$mul25,$mul22,$mul23,$mul20,$mul21,$mul17,$add98,$add99,$mul16,$add94,$add95,$add96,$add97,$add90,$add91,$add92,$add93,$mul14,$mul9,$mul8,$mul7,$mul6,$mul5,$add76,$add77,$mul15,$add75,$mul13,$mul12,$mul11,$mul10,vertices,$add78,$add79;
		vertices = $p['list']([$p['tuple']([(typeof ($mul5=$m['posX'])==typeof ($mul6=50) && typeof $mul5=='number'?
			$mul5*$mul6:
			$p['op_mul']($mul5,$mul6)), 300]), $p['tuple']([$p['__op_add']($add75=(typeof ($mul7=$m['posX'])==typeof ($mul8=50) && typeof $mul7=='number'?
			$mul7*$mul8:
			$p['op_mul']($mul7,$mul8)),$add76=50), 300]), $p['tuple']([$p['__op_add']($add77=(typeof ($mul9=$m['posX'])==typeof ($mul10=50) && typeof $mul9=='number'?
			$mul9*$mul10:
			$p['op_mul']($mul9,$mul10)),$add78=25), $p['__op_add']($add79=300,$add80=50)])]);
		if ($p['bool']($p['op_eq']($m['direction'], 'right'))) {
			vertices = $p['list']([$p['tuple']([(typeof ($mul11=$m['posX'])==typeof ($mul12=50) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12)), 300]), $p['tuple']([$p['__op_add']($add81=(typeof ($mul13=$m['posX'])==typeof ($mul14=50) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14)),$add82=50), $p['__op_add']($add83=300,$add84=25)]), $p['tuple']([(typeof ($mul15=$m['posX'])==typeof ($mul16=50) && typeof $mul15=='number'?
				$mul15*$mul16:
				$p['op_mul']($mul15,$mul16)), $p['__op_add']($add85=300,$add86=50)])]);
		}
		else if ($p['bool']($p['op_eq']($m['direction'], 'left'))) {
			vertices = $p['list']([$p['tuple']([$p['__op_add']($add87=(typeof ($mul17=$m['posX'])==typeof ($mul18=50) && typeof $mul17=='number'?
				$mul17*$mul18:
				$p['op_mul']($mul17,$mul18)),$add88=50), 300]), $p['tuple']([$p['__op_add']($add89=(typeof ($mul19=$m['posX'])==typeof ($mul20=50) && typeof $mul19=='number'?
				$mul19*$mul20:
				$p['op_mul']($mul19,$mul20)),$add90=50), $p['__op_add']($add91=300,$add92=50)]), $p['tuple']([(typeof ($mul21=$m['posX'])==typeof ($mul22=50) && typeof $mul21=='number'?
				$mul21*$mul22:
				$p['op_mul']($mul21,$mul22)), $p['__op_add']($add93=300,$add94=25)])]);
		}
		else if ($p['bool']($p['op_eq']($m['direction'], 'down'))) {
			vertices = $p['list']([$p['tuple']([(typeof ($mul23=$m['posX'])==typeof ($mul24=50) && typeof $mul23=='number'?
				$mul23*$mul24:
				$p['op_mul']($mul23,$mul24)), 300]), $p['tuple']([$p['__op_add']($add95=(typeof ($mul25=$m['posX'])==typeof ($mul26=50) && typeof $mul25=='number'?
				$mul25*$mul26:
				$p['op_mul']($mul25,$mul26)),$add96=50), 300]), $p['tuple']([$p['__op_add']($add97=(typeof ($mul27=$m['posX'])==typeof ($mul28=50) && typeof $mul27=='number'?
				$mul27*$mul28:
				$p['op_mul']($mul27,$mul28)),$add98=25), $p['__op_add']($add99=300,$add100=50)])]);
		}
		$m['pygame']['draw']['polygon']($m['DISPLAYSURF'], $p['tuple']([190, 78, 89]), vertices, 0);
		$p['printFunc']([$m['posY'], ', ', $m['posX']], 1);
		return null;
	};
	$m['renderCharacter']['__name__'] = 'renderCharacter';

	$m['renderCharacter']['__bind_type__'] = 0;
	$m['renderCharacter']['__args__'] = [null,null];
	$m['renderScreen'] = function() {
		var $iter7_array,$sub56,$iter6_type,$add103,$mul34,$iter6_iter,tileType,startPos,$iter6_nextval,PURPLE,$mul40,color,$mul29,$iter7_type,$or20,$add101,BLUE,$sub55,$add102,$add105,$add104,$iter6_idx,$add106,$iter7_iter,$iter6_array,$iter7_idx,WHITE,$mul37,PINK,$iter7_nextval,i,$mul31,j,$mul39,$mul38,$mul35,$mul36,$or19,$mul30,$mul33,$mul32;
		PINK = $p['tuple']([255, 0, 128]);
		PURPLE = $p['tuple']([147, 112, 219]);
		BLUE = $p['tuple']([135, 216, 250]);
		WHITE = $p['tuple']([255, 255, 255]);
		color = WHITE;
		$m['DISPLAYSURF']['fill']($p['tuple']([255, 255, 255]));
		$iter6_iter = $p['xrange'](0, $m['boardArrHeight']);
		$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
		while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
			i = $iter6_nextval['$nextval'];
			$iter7_iter = $p['xrange'](0, 10);
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				j = $iter7_nextval['$nextval'];
				tileType = $m['boardArr']['__getitem__']($p['tuple']([i, j]));
				if ($p['bool']($p['op_eq'](tileType, 1))) {
					color = PINK;
				}
				else if ($p['bool']($p['op_eq'](tileType, 2))) {
					color = PURPLE;
				}
				else if ($p['bool']($p['op_eq'](tileType, 3))) {
					color = BLUE;
				}
				else if ($p['bool'](($p['bool']($or19=$p['op_eq'](tileType, 4))?$or19:$p['op_eq'](tileType, 5)))) {
					color = $p['tuple']([0, 0, 0]);
				}
				else {
					color = WHITE;
				}
				startPos = $p['__op_sub']($sub55=300,$sub56=(typeof ($mul29=$m['posY'])==typeof ($mul30=50) && typeof $mul29=='number'?
					$mul29*$mul30:
					$p['op_mul']($mul29,$mul30)));
				if ($p['bool'](($p['cmp']($p['__op_add']($add101=startPos,$add102=(typeof ($mul31=i)==typeof ($mul32=50) && typeof $mul31=='number'?
					$mul31*$mul32:
					$p['op_mul']($mul31,$mul32))), 1000) == 1))) {
					break;
				}
				$m['pygame']['draw']['rect']($m['DISPLAYSURF'], color, $m['pygame']['Rect']((typeof ($mul33=j)==typeof ($mul34=50) && typeof $mul33=='number'?
					$mul33*$mul34:
					$p['op_mul']($mul33,$mul34)), $p['__op_add']($add103=startPos,$add104=(typeof ($mul35=i)==typeof ($mul36=50) && typeof $mul35=='number'?
					$mul35*$mul36:
					$p['op_mul']($mul35,$mul36))), 50, 50), 0);
				$m['pygame']['draw']['rect']($m['DISPLAYSURF'], WHITE, $m['pygame']['Rect']((typeof ($mul37=j)==typeof ($mul38=50) && typeof $mul37=='number'?
					$mul37*$mul38:
					$p['op_mul']($mul37,$mul38)), $p['__op_add']($add105=startPos,$add106=(typeof ($mul39=i)==typeof ($mul40=50) && typeof $mul39=='number'?
					$mul39*$mul40:
					$p['op_mul']($mul39,$mul40))), 50, 50), 5);
			}
		}
		$m['renderScoreAndStomach']();
		$m['renderCharacter']();
		$m['pygame']['display']['flip']();
		return null;
	};
	$m['renderScreen']['__name__'] = 'renderScreen';

	$m['renderScreen']['__bind_type__'] = 0;
	$m['renderScreen']['__args__'] = [null,null];
	$m['die'] = function() {

		$p['printFunc'](['collapsed on character'], 1);
		return null;
	};
	$m['die']['__name__'] = 'die';

	$m['die']['__bind_type__'] = 0;
	$m['die']['__args__'] = [null,null];
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['main']();
	}
	return this;
}; /* end game */


/* end module: game */


/*
PYJS_DEPS: ['random', 'time', 'pygame', 'sys', 'numpy', 'pygame.locals', 'pyjs']
*/
