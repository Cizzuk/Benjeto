# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "benjeto-jekyll-theme"
  spec.version       = "0.4.1"
  spec.authors       = ["Cizzuk"]

  spec.summary       = "Jekyll theme like social media profile."
  spec.homepage      = "https://cizzuk.net/app/benjeto"
  spec.license       = "MIT"

  spec.metadata["plugin_type"] = "theme"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets/(icon/|js/|styles.scss)|_data/texts.yml|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.17"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  #spec.add_runtime_dependency "jekyll-paginate-v2", "~> 3.0.0"
  #spec.add_runtime_dependency "jekyll-polyglot", "~> 1.8.0"

  spec.add_development_dependency "bundler"
end
