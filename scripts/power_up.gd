extends Traveler

class_name PowerUp

signal dead

func _process(_delta):
	super(_delta)
	$Sprite2D.rotate(PI / 180)


func _on_collide(_body):
	queue_free()
