extends Node2D

class_name Spawner

@export var ufo: PackedScene
@export var striker: PackedScene

@onready var spawn_pool = [ufo, striker]

func _tick():
	$Spawn/SpawnPoint.progress = randi()
	
	var mob = spawn_pool.pick_random().instantiate()
	mob.position = $Spawn/SpawnPoint.position
	
	mob.connect(&"dead", get_parent().get_node("hud").update_score)
	add_child(mob)
