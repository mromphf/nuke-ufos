extends Node2D

class_name Spawner

var spawn_pool = [
	preload("res://scenes/ufo.tscn"),
	preload("res://scenes/dark_ufo.tscn"),
	preload("res://scenes/striker.tscn"),
]

func _tick():
	$Spawn/SpawnPoint.progress_ratio = randf_range(0.25, 0.75)
	
	var mob = spawn_pool.pick_random().instantiate()
	mob.position = $Spawn/SpawnPoint.position
	
	mob.connect(&"dead", get_parent().get_node("hud").update_score)
	add_child(mob)
