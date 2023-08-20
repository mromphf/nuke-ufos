extends Node2D

class_name Spawner

var _bound_left = 0.35
var _bound_right = 0.65

var ufo = preload("res://scenes/ufo.tscn")
var dark_ufo = preload("res://scenes/dark_ufo.tscn")
var striker = preload("res://scenes/striker.tscn")

var spawn_pool = [ufo]


func _phase3():
	_bound_left = 0
	_bound_right = 1
	spawn_pool.push_back(dark_ufo)
	$Timer.wait_time = 1.5


func _phase2():
	_bound_left = 0.25
	_bound_right = 0.75
	spawn_pool.push_back(striker)
	$Phase3.start()


func _range():
	return randf_range(_bound_left, _bound_right)


func _tick():
	$Spawn/SpawnPoint.progress_ratio = _range()
	
	var mob = spawn_pool.pick_random().instantiate()
	mob.position = $Spawn/SpawnPoint.position
	
	mob.connect(&"dead", get_parent().get_node("hud").update_score)
	add_child(mob)

func _ready():
	$Phase2.start()
