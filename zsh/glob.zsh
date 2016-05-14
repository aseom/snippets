directory_list() {
    # man zshexpn -> Glob Qualifiers
    # Recursive: **/*(/DN)
    # /: Only directories
    # D: Include dotfiles
    # N: Null glob (required)
    for dir in *(/DN); do
        echo "$dir"
    done
}
