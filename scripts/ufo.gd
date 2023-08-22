extends Enemy

class_name Ufo

func _on_collide(body):
	super._on_damaged(body)
	$Animation.play(&"flash")
	$Hit.play()
