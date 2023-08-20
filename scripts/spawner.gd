extends Node2D

class_name Spawner

var _bound_left = 0.35
var _bound_right = 0.65

var ufo = preload("res://scenes/ufo.tscn")
var dark_ufo = preload("res://scenes/dark_ufo.tscn")
var striker = preload("res://scenes/striker.tscn")

var ammo = preload("res://scenes/ammo.tscn")

var spawn_pool = [ufo]
var power_up_pool = [ammo]


func _phase4():
	$Timer.wait_time = 0.75


func _phase3():
	_bound_left = 0.05
	_bound_right = 0.95
	spawn_pool.push_back(dark_ufo)
	$Timer.wait_time = 1.5
	$Phase4.start()


func _phase2():
	_bound_left = 0.25
	_bound_right = 0.75
	spawn_pool.push_back(striker)
	$Phase3.start()


func _range():
	return randf_range(_bound_left, _bound_right)


func _power_ups():
	var mob = power_up_pool.pick_random().instantiate()
	_spawn(mob)


func _tick():
	var mob = spawn_pool.pick_random().instantiate()
	mob.connect(&"dead", get_parent().get_node("hud").update_score)
	_spawn(mob)


func _spawn(mob):
	$Spawn/SpawnPoint.progress_ratio = _range()
	mob.position = $Spawn/SpawnPoint.position
	add_child(mob)

func _ready():
	$PowerUps.start()
	$Phase2.start()
