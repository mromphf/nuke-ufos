extends Node2D


func _ready():
	$Particles.emitting = true
	$Boom.play()


func _clean():
	queue_free()
