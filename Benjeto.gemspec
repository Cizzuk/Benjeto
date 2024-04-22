# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "Benjeto"
  spec.version       = "0.1"
  spec.authors       = ["Cizzuk"]

  spec.summary       = "Jekyll theme like social media profile."
  spec.homepage      = "https://cizzuk.net/app/benjeto"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
end
