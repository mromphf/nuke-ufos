extends Node2D

@export var mob: PackedScene

func _tick():
	$Spawn/SpawnPoint.progress = randi()
	
	var spawn = mob.instantiate()
	spawn.position = $Spawn/SpawnPoint.position
	
	get_parent().add_child(spawn)
