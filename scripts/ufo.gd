extends Enemy

class_name Ufo

func _on_collide(body):
	super(body)
	$Animation.play(&"flash")
	$Hit.play()
