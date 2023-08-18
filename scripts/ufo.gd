extends Enemy

func _despawn():
	queue_free()

func _process(_delta):
	rotate(PI / 180)
	position += Vector2(0, 2)

func _on_collide(_body):
	if _body is Laser:
		hide()
		Soundboard.play($Boom)
		$Despawn.start()
