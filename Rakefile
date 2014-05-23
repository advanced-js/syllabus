require 'rubygems'
require 'bundler'
Bundler.require(:default)

desc "Run Mardown validation for the repository"
task :validate_markdown do
  MarkdownProofer::RakeTask.run(
    html_proofer: {
      # TODO fix in HTML::Proofer
      href_ignore: [/@nyu\.edu/]
    }
  )
end

task default: :validate_markdown
