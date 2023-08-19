extends Node2D

@export var ufo: PackedScene
@export var striker: PackedScene

@onready var spawn_pool = [ufo, striker]

func _tick():
	$Spawn/SpawnPoint.progress = randi()
	
	var mob = spawn_pool.pick_random().instantiate()
	mob.position = $Spawn/SpawnPoint.position
	
	get_parent().add_child(mob)
